// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/InboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InboxOutlinedSvg}></AntdIcon>;
};

InboxOutlined.displayName = 'InboxOutlined';
InboxOutlined.inheritAttrs = false;
export default InboxOutlined;