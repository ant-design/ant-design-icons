// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DownCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DownCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DownCircleTwoTone: DownCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownCircleTwoToneSvg}></AntdIcon>;
};

DownCircleTwoTone.displayName = 'DownCircleTwoTone';
DownCircleTwoTone.inheritAttrs = false;
export default DownCircleTwoTone;