// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InstagramOutlinedSvg from '@ant-design/icons-svg/lib/asn/InstagramOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InstagramOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InstagramOutlined: InstagramOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramOutlinedSvg}></AntdIcon>;
};

InstagramOutlined.displayName = 'InstagramOutlined';
InstagramOutlined.inheritAttrs = false;
export default InstagramOutlined;