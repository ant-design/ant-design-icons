// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckOutlinedSvg}></AntdIcon>;
};

CheckOutlined.displayName = 'CheckOutlined';
CheckOutlined.inheritAttrs = false;
export default CheckOutlined;