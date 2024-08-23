"use client";

import * as shadcnComponents from "@/utils/shadcn";
import * as aceternityComponents from "@/utils/aceternity";
import { Sandpack } from "@codesandbox/sandpack-react";
import {
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react/unstyled";
import { dracula as draculaTheme } from "@codesandbox/sandpack-themes";
import dedent from "dedent";
import "./code-viewer.css";

export default function CodeViewer({
  code,
  showEditor = false,
}: {
  code: string;
  showEditor?: boolean;
}) {
  return showEditor ? (
    <Sandpack
      options={{
        showNavigator: true,
        editorHeight: "80vh",
        showTabs: false,
        ...sharedOptions,
      }}
      files={{
        "App.tsx": code,
        ...sharedFiles,
      }}
      {...sharedProps}
    />
  ) : (
    <SandpackProvider
      files={{
        "App.tsx": code,
        ...sharedFiles,
      }}
      className="flex h-full w-full grow flex-col justify-center"
      options={{ ...sharedOptions }}
      {...sharedProps}
    >
      <SandpackPreview
        className="flex h-full w-full grow flex-col justify-center p-4 md:pt-16"
        showOpenInCodeSandbox={false}
        showRefreshButton={false}
      />
    </SandpackProvider>
  );
}

let sharedProps = {
  template: "react-ts",
  theme: draculaTheme,
  customSetup: {
    dependencies: {
      "lucide-react": "latest",
      recharts: "2.9.0",
      "react-router-dom": "latest",
      "@radix-ui/react-accordion": "^1.2.0",
      "@radix-ui/react-alert-dialog": "^1.1.1",
      "@radix-ui/react-aspect-ratio": "^1.1.0",
      "@radix-ui/react-avatar": "^1.1.0",
      "@radix-ui/react-checkbox": "^1.1.1",
      "@radix-ui/react-collapsible": "^1.1.0",
      "@radix-ui/react-dialog": "^1.1.1",
      "@radix-ui/react-dropdown-menu": "^2.1.1",
      "@radix-ui/react-hover-card": "^1.1.1",
      "@radix-ui/react-label": "^2.1.0",
      "@radix-ui/react-menubar": "^1.1.1",
      "@radix-ui/react-navigation-menu": "^1.2.0",
      "@radix-ui/react-popover": "^1.1.1",
      "@radix-ui/react-progress": "^1.1.0",
      "@radix-ui/react-radio-group": "^1.2.0",
      "@radix-ui/react-select": "^2.1.1",
      "@radix-ui/react-separator": "^1.1.0",
      "@radix-ui/react-slider": "^1.2.0",
      "@radix-ui/react-slot": "^1.1.0",
      "@radix-ui/react-switch": "^1.1.0",
      "@radix-ui/react-tabs": "^1.1.0",
      "@radix-ui/react-toast": "^1.2.1",
      "@radix-ui/react-toggle": "^1.1.0",
      "@radix-ui/react-toggle-group": "^1.1.0",
      "@radix-ui/react-tooltip": "^1.1.2",
      "@radix-ui/react-scroll-area": "^1.0.0",
      "class-variance-authority": "^0.7.0",
      clsx: "^2.1.1",
      "date-fns": "^3.6.0",
      "embla-carousel-react": "^8.1.8",
      "react-day-picker": "^8.10.1",
      "tailwind-merge": "^2.4.0",
      "tailwindcss-animate": "^1.0.7",
      vaul: "^0.9.1",
    },
  },
} as const;

let sharedOptions = {
  externalResources: [
    "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
  ],
};

let sharedFiles = {
  "/lib/utils.ts": shadcnComponents.utils,
  "/shadcn/components/ui/accordion.tsx": shadcnComponents.accordian,
  "/shadcn/components/ui/alert-dialog.tsx": shadcnComponents.alertDialog,
  "/shadcn/components/ui/alert.tsx": shadcnComponents.alert,
  "/shadcn/components/ui/aspect-ratio.tsx": shadcnComponents.aspectRatio,
  "/shadcn/components/ui/avatar.tsx": shadcnComponents.avatar,
  "/shadcn/components/ui/badge.tsx": shadcnComponents.badge,
  "/shadcn/components/ui/breadcrumb.tsx": shadcnComponents.breadcrumb,
  "/shadcn/components/ui/button.tsx": shadcnComponents.button,
  "/shadcn/components/ui/calendar.tsx": shadcnComponents.calendar,
  "/shadcn/components/ui/card.tsx": shadcnComponents.card,
  "/shadcn/components/ui/carousel.tsx": shadcnComponents.carousel,
  "/shadcn/components/ui/checkbox.tsx": shadcnComponents.checkbox,
  "/shadcn/components/ui/collapsible.tsx": shadcnComponents.collapsible,
  "/shadcn/components/ui/dialog.tsx": shadcnComponents.dialog,
  "/shadcn/components/ui/drawer.tsx": shadcnComponents.drawer,
  "/shadcn/components/ui/dropdown-menu.tsx": shadcnComponents.dropdownMenu,
  "/shadcn/components/ui/input.tsx": shadcnComponents.input,
  "/shadcn/components/ui/label.tsx": shadcnComponents.label,
  "/shadcn/components/ui/menubar.tsx": shadcnComponents.menuBar,
  "/shadcn/components/ui/navigation-menu.tsx": shadcnComponents.navigationMenu,
  "/shadcn/components/ui/pagination.tsx": shadcnComponents.pagination,
  "/shadcn/components/ui/popover.tsx": shadcnComponents.popover,
  "/shadcn/components/ui/progress.tsx": shadcnComponents.progress,
  "/shadcn/components/ui/radio-group.tsx": shadcnComponents.radioGroup,
  "/shadcn/components/ui/scroll-area.tsx": shadcnComponents.scrollArea,
  "/shadcn/components/ui/select.tsx": shadcnComponents.select,
  "/shadcn/components/ui/separator.tsx": shadcnComponents.separator,
  "/shadcn/components/ui/skeleton.tsx": shadcnComponents.skeleton,
  "/shadcn/components/ui/slider.tsx": shadcnComponents.slider,
  "/shadcn/components/ui/switch.tsx": shadcnComponents.switchComponent,
  "/shadcn/components/ui/table.tsx": shadcnComponents.table,
  "/shadcn/components/ui/tabs.tsx": shadcnComponents.tabs,
  "/shadcn/components/ui/textarea.tsx": shadcnComponents.textarea,
  "/shadcn/components/ui/toast.tsx": shadcnComponents.toast,
  "/shadcn/components/ui/toaster.tsx": shadcnComponents.toaster,
  "/shadcn/components/ui/toggle-group.tsx": shadcnComponents.toggleGroup,
  "/shadcn/components/ui/toggle.tsx": shadcnComponents.toggle,
  "/shadcn/components/ui/tooltip.tsx": shadcnComponents.tooltip,
  "/shadcn/components/ui/use-toast.tsx": shadcnComponents.useToast,

  "/hook/use-outside-click.ts": aceternityComponents.useOutsideClick,
  "/aceternity/components/three-dcard.tsx": aceternityComponents.threeDCard,
  "/aceternity/components/three-dpin.tsx": aceternityComponents.threeDPin,
  "/aceternity/components/animated-modal.tsx": aceternityComponents.animatedModal,
  "/aceternity/components/animated-tooltip.tsx": aceternityComponents.animatedTooltip,
  "/aceternity/components/apple-cards-carousel.tsx": aceternityComponents.appleCardsCarousel,
  "/aceternity/components/aurora-background.tsx": aceternityComponents.auroraBackground,
  "/aceternity/components/background-beams.tsx": aceternityComponents.backgroundBeams,
  "/aceternity/components/background-boxes.tsx": aceternityComponents.backgroundBoxes,
  "/aceternity/components/background-gradient-animation.tsx": aceternityComponents.backgroundGradientAnimation,
  "/aceternity/components/background-gradient.tsx": aceternityComponents.backgroundGradient,
  "/aceternity/components/bento-grid.tsx": aceternityComponents.bentoGrid,
  "/aceternity/components/canvas-reveal-effect.tsx": aceternityComponents.canvasRevealEffect,
  "/aceternity/components/card-hover-effect.tsx": aceternityComponents.cardHoverEffect,
  "/aceternity/components/card-spotlight.tsx": aceternityComponents.cardSpotlight,
  "/aceternity/components/card-stack.tsx": aceternityComponents.cardStack,
  "/aceternity/components/compare.tsx": aceternityComponents.compare,
  "/aceternity/components/container-scroll-animation.tsx": aceternityComponents.containerScrollAnimation,
  "/aceternity/components/direction-aware-hover.tsx": aceternityComponents.directionAwareHover,
  "/aceternity/components/evervault-card.tsx": aceternityComponents.evervaultCard,
  "/aceternity/components/file-upload.tsx": aceternityComponents.fileUpload,
  "/aceternity/components/flip-words.tsx": aceternityComponents.flipWords,
  "/aceternity/components/floating-dock.tsx": aceternityComponents.floatingDock,
  "/aceternity/components/floating-navbar.tsx": aceternityComponents.floatingNavbar,
  "/aceternity/components/following-pointer.tsx": aceternityComponents.followingPointer,
  "/aceternity/components/glare-card.tsx": aceternityComponents.glareCard,
  "/aceternity/components/globe.tsx": aceternityComponents.globe,
  "/aceternity/components/glowing-stars.tsx": aceternityComponents.glowingStars,
  "/aceternity/components/google-gemini-effect.tsx": aceternityComponents.googleGeminiEffect,
  "/aceternity/components/grid.tsx": aceternityComponents.gridAndDot,
  "/aceternity/components/hero-highlight.tsx": aceternityComponents.heroHighlight,
  "/aceternity/components/hero-parallax.tsx": aceternityComponents.heroParallax,
  "/aceternity/components/hover-border-gradient.tsx": aceternityComponents.hoverBorderGradient,
  "/aceternity/components/images-slider.tsx": aceternityComponents.imagesSlider,
  "/aceternity/components/infinite-moving-cards.tsx": aceternityComponents.infiniteMovingCards,
  "/aceternity/components/input.tsx": aceternityComponents.input,
  "/aceternity/components/label.tsx": aceternityComponents.label,
  "/aceternity/components/lamp.tsx": aceternityComponents.lamp,
  "/aceternity/components/layout-grid.tsx": aceternityComponents.layoutGrid,
  "/aceternity/components/link-preview.tsx": aceternityComponents.linkPreview,
  "/aceternity/components/macbook-scroll.tsx": aceternityComponents.macbookScroll,
  "/aceternity/components/meteors.tsx": aceternityComponents.meteors,
  "/aceternity/components/moving-border.tsx": aceternityComponents.movingBorder,
  "/aceternity/components/moving-line.tsx": aceternityComponents.movingLine,
  "/aceternity/components/multi-step-loader.tsx": aceternityComponents.multiStepLoader,
  "/aceternity/components/navbar-menu.tsx": aceternityComponents.navbarMenu,
  "/aceternity/components/parallax-scroll2.tsx": aceternityComponents.parallaxScroll2,
  "/aceternity/components/parallax-scroll.tsx": aceternityComponents.parallaxScroll,
  "/aceternity/components/placeholders-and-vanish-input.tsx": aceternityComponents.placeholdersAndVanishInput,
  "/aceternity/components/shooting-stars.tsx": aceternityComponents.shootingStars,
  "/aceternity/components/sidebar.tsx": aceternityComponents.sidebar,
  "/aceternity/components/sparkles.tsx": aceternityComponents.sparkles,
  "/aceternity/components/spotlight.tsx": aceternityComponents.spotlight,
  "/aceternity/components/stars-background.tsx": aceternityComponents.starsBackground,
  "/aceternity/components/sticky-scroll-reveal.tsx": aceternityComponents.stickyScrollReveal,
  "/aceternity/components/svg-mask-effect.tsx": aceternityComponents.svgMaskEffect,
  "/aceternity/components/tabs.tsx": aceternityComponents.tabs,
  "/aceternity/components/tailwindcss-buttons.tsx": aceternityComponents.tailwindcssButtons,
  "/aceternity/components/text-generate-effect.tsx": aceternityComponents.textGenerateEffect,
  "/aceternity/components/text-reveal-card.tsx": aceternityComponents.textRevealCard,
  "/aceternity/components/tracing-beam.tsx": aceternityComponents.tracingBeam,
  "/aceternity/components/typewriter-effect.tsx": aceternityComponents.typewriterEffect,
  "/aceternity/components/vortex.tsx": aceternityComponents.vortex,
  "/aceternity/components/wavy-background.tsx": aceternityComponents.wavyBackground,
  "/aceternity/components/wobble-card.tsx": aceternityComponents.wobbleCard,

  "/public/index.html": dedent`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  `,
};
