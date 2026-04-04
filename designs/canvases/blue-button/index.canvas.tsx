import type { TempoPage, TempoStoryboard } from 'tempo-sdk';
import { BlueButton as BlueButtonComponent } from './BlueButton';

const page: TempoPage = {
  name: "Blue Button",
};

export default page;

export const BlueButton: TempoStoryboard = {
  render: () => <BlueButtonComponent />,
  name: "Blue Button",
  layout: { x: 0, y: 0, width: 400, height: 300 },
};
