// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PoundCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PoundCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PoundCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PoundCircleTwoTone: PoundCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PoundCircleTwoToneSvg}></AntdIcon>;
};

PoundCircleTwoTone.displayName = 'PoundCircleTwoTone';
PoundCircleTwoTone.inheritAttrs = false;
export default PoundCircleTwoTone;