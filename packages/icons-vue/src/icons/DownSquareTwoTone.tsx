// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DownSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DownSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DownSquareTwoTone: DownSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownSquareTwoToneSvg}></AntdIcon>;
};

DownSquareTwoTone.displayName = 'DownSquareTwoTone';
DownSquareTwoTone.inheritAttrs = false;
export default DownSquareTwoTone;