export const name = "ThreeDCard";

export const importDocs = `
import { CardBody, CardContainer, CardItem } from "/components/ui/three-dcard";
import Image from "next/image";
import Link from "next/link";
`;

export const usageDocs = `
<CardContainer className="inter-var">
  <CardBody className="bg-gray-50 dark:bg-black rounded-xl p-6 border dark:border-white/[0.2] dark:hover:shadow-2xl w-auto sm:w-[30rem]">
    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
      Make things float in air
    </CardItem>
    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
      Hover over this card to unleash the power of CSS perspective
    </CardItem>
    <CardItem translateZ="100" className="w-full mt-4">
      <Image
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560"
        alt="thumbnail"
        width="1000"
        height="1000"
        className="h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
      />
    </CardItem>
    <div className="flex justify-between items-center mt-20">
      <CardItem as={Link} href="https://twitter.com/mannupaaji" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
        Try now →
      </CardItem>
      <CardItem as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
        Sign up
      </CardItem>
    </div>
  </CardBody>
</CardContainer>
`;