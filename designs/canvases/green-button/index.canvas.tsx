import type { TempoPage, TempoStoryboard } from 'tempo-sdk';
import { GreenButton } from './GreenButton';

const page: TempoPage = {
  name: "Green Button",
};

export default page;

export const GreenButtonStoryboard: TempoStoryboard = {
  render: () => <GreenButton />,
  name: "Green Button",
  layout: { x: 0, y: 0, width: 300, height: 200 },
};
