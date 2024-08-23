export const name = "AnimatedPin";

export const importDocs = `
import { PinContainer } from "/components/ui/three-dpin";
`;

export const usageDocs = `
<div className="h-[40rem] w-full flex items-center justify-center">
  <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
    <div className="flex flex-col p-4 text-slate-100/50 w-[20rem] h-[20rem]">
      <h3 className="text-base font-bold text-slate-100">
        Aceternity UI
      </h3>
      <div className="text-base font-normal text-slate-500">
        Customizable Tailwind CSS and Framer Motion Components.
      </div>
      <div className="flex-1 w-full mt-4 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"/>
    </div>
  </PinContainer>
</div>
`;