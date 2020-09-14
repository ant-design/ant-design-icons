// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckCircleOutlinedSvg}></AntdIcon>;
};

CheckCircleOutlined.displayName = 'CheckCircleOutlined';
CheckCircleOutlined.inheritAttrs = false;
export default CheckCircleOutlined;