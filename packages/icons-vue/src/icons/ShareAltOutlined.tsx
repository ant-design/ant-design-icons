// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShareAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShareAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShareAltOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShareAltOutlined: ShareAltOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareAltOutlinedSvg}></AntdIcon>;
};

ShareAltOutlined.displayName = 'ShareAltOutlined';
ShareAltOutlined.inheritAttrs = false;
export default ShareAltOutlined;