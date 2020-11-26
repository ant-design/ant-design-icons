// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkOutlined: LinkOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkOutlinedSvg}></AntdIcon>;
};

LinkOutlined.displayName = 'LinkOutlined';
LinkOutlined.inheritAttrs = false;
export default LinkOutlined;