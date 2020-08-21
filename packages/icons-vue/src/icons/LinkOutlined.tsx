// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinkOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkOutlinedSvg}></AntdIcon>;
};

LinkOutlined.displayName = 'LinkOutlined';
LinkOutlined.inheritAttrs = false;
export default LinkOutlined;