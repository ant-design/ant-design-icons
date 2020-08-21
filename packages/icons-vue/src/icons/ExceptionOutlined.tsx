// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExceptionOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExceptionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExceptionOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExceptionOutlinedSvg}></AntdIcon>;
};

ExceptionOutlined.displayName = 'ExceptionOutlined';
ExceptionOutlined.inheritAttrs = false;
export default ExceptionOutlined;