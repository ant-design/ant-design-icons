// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/InboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InboxOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InboxOutlined: InboxOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InboxOutlinedSvg}></AntdIcon>;
};

InboxOutlined.displayName = 'InboxOutlined';
InboxOutlined.inheritAttrs = false;
export default InboxOutlined;