export const name = "ImagesSlider";

export const importDocs = `
import {
  ImagesSlider,
  ImagesSliderContent,
  ImagesSliderItem,
  ImagesSliderTrigger,
} from "/components/ui/images-slider";
`;

export const usageDocs = `
<ImagesSlider type="single" collapsible>
  <ImagesSliderItem value="item-1">
    <ImagesSliderTrigger>Is it accessible?</ImagesSliderTrigger>
    <ImagesSliderContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </ImagesSliderContent>
  </ImagesSliderItem>
</ImagesSlider>
`;