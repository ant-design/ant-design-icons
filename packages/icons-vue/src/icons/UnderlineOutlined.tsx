// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UnderlineOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnderlineOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnderlineOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnderlineOutlinedSvg}></AntdIcon>;
};

UnderlineOutlined.displayName = 'UnderlineOutlined';
UnderlineOutlined.inheritAttrs = false;
export default UnderlineOutlined;