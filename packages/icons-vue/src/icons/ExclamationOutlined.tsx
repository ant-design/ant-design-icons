// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExclamationOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExclamationOutlinedSvg}></AntdIcon>;
};

ExclamationOutlined.displayName = 'ExclamationOutlined';
ExclamationOutlined.inheritAttrs = false;
export default ExclamationOutlined;