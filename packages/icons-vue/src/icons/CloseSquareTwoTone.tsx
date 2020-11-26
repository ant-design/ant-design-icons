// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseSquareTwoTone: CloseSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseSquareTwoToneSvg}></AntdIcon>;
};

CloseSquareTwoTone.displayName = 'CloseSquareTwoTone';
CloseSquareTwoTone.inheritAttrs = false;
export default CloseSquareTwoTone;