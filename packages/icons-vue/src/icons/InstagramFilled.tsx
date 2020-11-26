// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InstagramFilledSvg from '@ant-design/icons-svg/lib/asn/InstagramFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InstagramFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InstagramFilled: InstagramFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramFilledSvg}></AntdIcon>;
};

InstagramFilled.displayName = 'InstagramFilled';
InstagramFilled.inheritAttrs = false;
export default InstagramFilled;