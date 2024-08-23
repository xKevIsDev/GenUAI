"use client";

import CodeViewer from "@/components/code-viewer";
import Footer from "@/components/Footer";
import { useScrollTo } from "@/hooks/use-scroll-to";
import { domain } from "@/utils/domain";
import { ArrowLongRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import LoadingDots from "../../components/loading-dots";
import { shareApp } from "./actions";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui-libraries/shadcn/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui-libraries/shadcn/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui-libraries/shadcn/popover"
import React from "react";
import { FlipWords } from "@/components/ui-libraries/aceternity/flip-words";
import WordRotate from "@/components/ui-libraries/magicui/word-rotate";
import { LoadingScreen } from "@/components/loadingScreen";
import Login from "@/components/login/login-button";

const uiLibraries = [
  {
    value: "shadcn",
    label: "Shadcn",
  },
  {
    value: "aceternity",
    label: "Aceternity",
  },
  {
    value: "magicui",
    label: "MagicUI",
  },
  {
    value: "syntaxui",
    label: "SyntaxUI",
  },
]

const models = [
  {
    label: "Llama 3.1 405B (default)",
    value:
      "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
  },
  {
    label: "Claude 3.5 (PREMIUM)",
    value: "claude-3-5-sonnet-20240620",
  },
  {
    label: "Llama 3.1 70B",
    value:
      "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
  },
  {
    label: "Llama 3.1 8B",
    value:
      "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
  },
  {
    label: "Gemma 2 27B",
    value: "google/gemma-2-27b-it",
  },
]

const words = ["unique", "cute", "creative", "modern", "tasty", "your"];

export default function Home() {
  const [modelOpen, setModelOpen] = React.useState(false)
  const [uiListOpen, setUIListOpen] = React.useState(false)
  const [modelValue, setModelValue] = React.useState("meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo")
  const [uiValue, setUIValue] = React.useState("shadcn")
  let [status, setStatus] = useState<
    "initial" | "creating" | "created" | "updating" | "updated"
  >("initial");
  let [generatedCode, setGeneratedCode] = useState("");
  let [initialAppConfig, setInitialAppConfig] = useState({
    model: "",
    library: uiValue,
  });
  let [ref, scrollTo] = useScrollTo();
  let [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  let [isPublishing, setIsPublishing] = useState(false);

  let loading = status === "creating" || status === "updating";

  function getEndpoint(modelValue: string) {
    if (modelValue === "claude-3-5-sonnet-20240620") {
      return "/api/claudeGenerate";
    } else {
      return "/api/generateCode";
    }
  }

  async function generateCode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Form submission started");

    if (status !== "initial") {
      console.log("Scrolling to the next section...");
      scrollTo({ delay: 0.5 });
    }

    setStatus("creating");
    setGeneratedCode("");
    console.log("Status set to 'creating' and generated code cleared");

    let formData = new FormData(e.currentTarget);
    formData.append("model", modelValue || "");
    formData.append("shadcn", String(!!uiValue));
    let model = formData.get("model");
    let prompt = formData.get("prompt");
    let library = uiValue;

    console.log("Form Data:", { model, prompt, library });

    if (typeof prompt !== "string" || typeof model !== "string") {
      console.log("Invalid prompt or model type");
      return;
    }
    let newMessages = [{ role: "user", content: prompt }];

    console.log("New Messages:", newMessages);

    try {
      const chatRes = await fetch(getEndpoint(modelValue), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
          model,
          library,
        }),
      });

      console.log("API response status:", chatRes.status);

      if (!chatRes.ok) {
        throw new Error(chatRes.statusText);
      }

      const data = chatRes.body;
      if (!data) {
        console.log("No data received in the response body");
        return;
      }
      console.log("Received data as ReadableStream");

      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === "event") {
          const data = event.data;
          try {
            const text = JSON.parse(data).text ?? "";
            console.log("Parsed text from stream:", text);
            setGeneratedCode((prev) => prev + text);
          } catch (e) {
            console.error("Error parsing event data:", e);
          }
        }
      };

      const reader = data.getReader();
      const decoder = new TextDecoder();
      const parser = createParser(onParse);
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);

        console.log("Processing chunk:", chunkValue);

        parser.feed(chunkValue);
      }

      newMessages = [
        ...newMessages,
        { role: "assistant", content: generatedCode },
      ];

      console.log("Final Messages:", newMessages);
      setInitialAppConfig({ model, library });
      setMessages(newMessages);
      setStatus("created");
      console.log("Status set to 'created'");
      
    } catch (error) {
      console.error("Error during code generation:", error);
    }
  }

  async function modifyCode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("updating");

    let formData = new FormData(e.currentTarget);
    let prompt = formData.get("prompt");
    if (typeof prompt !== "string") {
      return;
    }
    let newMessages = [...messages, { role: "user", content: prompt }];

    setGeneratedCode("");
    const chatRes = await fetch("/api/generateCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: newMessages,
        model: initialAppConfig.model,
        library: initialAppConfig.library,
      }),
    });
    if (!chatRes.ok) {
      throw new Error(chatRes.statusText);
    }

    const data = chatRes.body;
    if (!data) {
      return;
    }
    const onParse = (event: ParsedEvent | ReconnectInterval) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          const text = JSON.parse(data).text ?? "";
          setGeneratedCode((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    };

    const reader = data.getReader();
    const decoder = new TextDecoder();
    const parser = createParser(onParse);
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      parser.feed(chunkValue);
    }

    newMessages = [
      ...newMessages,
      { role: "assistant", content: generatedCode },
    ];

    setMessages(newMessages);
    setStatus("updated");
  }

  useEffect(() => {
    if (status !== "initial" && loading) {
      scrollTo();
    }
  }, [status, loading]);

  return (
    <div className="mx-auto h-full flex w-full flex-col items-center justify-between py-2 overflow-auto">
      <Login/>
      <main className=" flex w-full flex-col items-center px-4 text-center sm:mt-20">
        <a
          className="mb-4 inline-flex h-7 shrink-0 items-center gap-[9px] rounded-[50px] border-[0.5px] border-solid border-[#7A12EA] bg-[rgba(234,238,255,0.65)] bg-zinc-800 px-7 py-5 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)]"
          href="https://dub.sh/together-ai/?utm_source=example-app&utm_medium=llamacoder&utm_campaign=llamacoder-app-signup"
          target="_blank"
        >
          <span className="text-center text-white flex gap-1 items-center">
            Powered by
            <span className="font-medium text-purple-400"><WordRotate
              className=""
              words={["Claude 3.5", "Lamma 3.1", "Gemini 3.0"]}
            />
            </span>
          </span>
        </a>
          <div className="relative my-6 max-w-3xl text-4xl font-bold text-white/70 sm:text-6xl">
            Build
            <FlipWords className="!text-[#7A12EA]" words={words} /> <br />
            websites with GenUAI
          </div>

        <form className="w-full max-w-xl" onSubmit={generateCode}>
          <fieldset disabled={loading} className="disabled:opacity-75">
            <div className="relative mt-5">
              <div className="absolute -inset-0.5 rounded-full bg-purple-400" />
              <div className="relative flex rounded-full bg-zinc-800 shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                  <input
                    required
                    name="prompt"
                    className="w-full text-white rounded-xl bg-transparent px-6 py-4 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-transparent"
                    placeholder="Build me a unique landing page..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-3xl px-3 py-2 text-sm font-semibold text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 disabled:text-gray-900"
                >
                  {status === "creating" ? (
                    <LoadingDots color="black" style="large" />
                  ) : (
                    <ArrowLongRightIcon className="-ml-0.5 size-6 text-purple-400" />
                  )}
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center justify-between gap-3 sm:justify-center">
              <Popover open={modelOpen} onOpenChange={setModelOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={modelOpen}
                    className="w-60 max-w-xs justify-between rounded-full border-[1px] !border-purple-400 !bg-zinc-800 px-4 py-2 text-sm text-white/50"
                    disabled={loading}
                  >
                    {models.find((model) => model.value === modelValue)?.label || "Select model..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-60 max-w-xs p-0">
                  <Command>
                    <CommandInput placeholder="Search model..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No model found.</CommandEmpty>
                      <CommandGroup>
                        {models.map((model) => (
                          <CommandItem
                            key={model.value}
                            value={model.value}
                            onSelect={(currentValue) => {
                              setModelValue(currentValue)
                              setModelOpen(false)
                            }}
                          >
                            <span className="inline-flex items-center gap-2">
                              <div className="size-2 rounded-full bg-green-500" />
                              {model.label}
                            </span>
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                modelValue === model.value ? "opacity-100 text-[blue-600]" : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

              <div className="flex h-full items-center justify-between gap-3 sm:justify-center">
                <div className="flex items-center space-x-2">
                  <Popover open={uiListOpen} onOpenChange={setUIListOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="checkbox"
                        aria-expanded={uiListOpen}
                        className="w-60 max-w-xs justify-between rounded-full border-[1px] !border-purple-400 !bg-zinc-800 px-4 py-2 text-sm text-white/50"
                      >
                        {uiLibraries.find((uiLibrary) => uiLibrary.value === uiValue)?.label || "Select library..."}
                        <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder={`Search Libraries...`} className="h-9" />
                        <CommandList>
                          <CommandEmpty>No option found.</CommandEmpty>
                          <CommandGroup className="">
                          {uiLibraries.map((uiLibrary) => (
                            <CommandItem
                              key={uiLibrary.value}
                              value={uiLibrary.value}
                              onSelect={(currentValue) => {
                                setUIValue(currentValue)
                                setUIListOpen(false)
                              }}
                            >
                              <span className="inline-flex items-center gap-2">
                                <div className="size-2 rounded-full bg-green-500" />
                                {uiLibrary.label}
                              </span>
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  uiValue === uiLibrary.value ? "opacity-100 text-blue-600" : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </fieldset>
        </form>

        <hr className="border-1 mb-20 h-px bg-gray-700 dark:bg-gray-700" />

        {status !== "initial" && (
          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: "auto",
              overflow: "hidden",
              transitionEnd: { overflow: "visible" },
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="w-full pt-10 mt-20"
            onAnimationComplete={() => scrollTo()}
            ref={ref}
          >
            <div className="mt-5 flex gap-4">
              <form className="w-full" onSubmit={modifyCode}>
                <fieldset disabled={loading} className="group">
                  <div className="relative">
                    <div className="relative flex rounded-3xl bg-zinc-900 shadow-sm group-disabled:bg-gray-50 border border-purple-400">
                      <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <input
                          required
                          name="prompt"
                          className="w-full rounded-l-3xl bg-transparent px-6 py-5 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-transparent disabled:cursor-not-allowed"
                          placeholder="Make changes to your app here"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-3xl px-3 py-2 text-sm font-semibold text-purple-400 hover:text-[#7A12EA]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 disabled:text-gray-900"
                      >
                        {loading ? (
                          <LoadingDots color="black" style="large" />
                        ) : (
                          <ArrowLongRightIcon className="-ml-0.5 size-6" />
                        )}
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div>
                <Toaster invert={true} />
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button
                        disabled={loading || isPublishing}
                        onClick={async () => {
                          setIsPublishing(true);
                          let userMessages = messages.filter(
                            (message) => message.role === "user",
                          );
                          let prompt =
                            userMessages[userMessages.length - 1].content;

                          const appId = await minDelay(
                            shareApp({
                              generatedCode,
                              prompt,
                              model: initialAppConfig.model,
                            }),
                            1000,
                          );
                          setIsPublishing(false);
                          toast.success(
                            `Your app has been published & copied to your clipboard! llamacoder.io/share/${appId}`,
                          );
                          navigator.clipboard.writeText(
                            `${domain}/share/${appId}`,
                          );
                        }}
                        className="inline-flex h-[68px] w-40 items-center justify-center gap-2 rounded-3xl bg-[#7A12EA] transition enabled:hover:bg-[#7A12EA]/50 disabled:grayscale"
                      >
                        <span className="relative">
                          {isPublishing && (
                            <span className="absolute inset-0 flex items-center justify-center">
                              <LoadingDots color="white" style="large" />
                            </span>
                          )}

                          <ArrowUpOnSquareIcon
                            className={`${isPublishing ? "invisible" : ""} size-5 text-xl text-white`}
                          />
                        </span>

                        <p className="text-lg font-medium text-white">
                          Publish app
                        </p>
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="select-none rounded bg-white px-4 py-2.5 text-sm leading-none shadow-md shadow-black/20"
                        sideOffset={5}
                      >
                        Publish your app to the internet.
                        <Tooltip.Arrow className="fill-white" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            </div>
            <div className="relative mt-8 w-full overflow-hidden " ref={ref}>
              <div className="isolate">
                <CodeViewer code={generatedCode} showEditor />
              </div>

              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={status === "updating" ? { x: "100%" } : undefined}
                    animate={status === "updating" ? { x: "0%" } : undefined}
                    exit={{ x: "100%" }}
                    transition={{
                      type: "spring",
                      bounce: 0,
                      duration: 0.85,
                      delay: 0.5,
                    }}
                    className="absolute inset-x-0 bottom-0 top-1/2 flex flex-col items-center justify-center rounded-r border border-gray-400 bg-zinc-800 md:inset-y-0 md:left-1/2 md:right-0 gap-2"
                  >
                      <LoadingScreen className="border border-none  "/>
                      <p className="animate-pulse text-3xl font-bold text-white">
                        {status === "creating"
                        
                          ? "Building your app..."
                          : "Updating your app..."}
                      </p>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}

async function minDelay<T>(promise: Promise<T>, ms: number) {
  let delay = new Promise((resolve) => setTimeout(resolve, ms));
  let [p] = await Promise.all([promise, delay]);

  return p;
}
