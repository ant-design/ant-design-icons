// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RetweetOutlinedSvg from '@ant-design/icons-svg/lib/asn/RetweetOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RetweetOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RetweetOutlinedSvg}></AntdIcon>;
};

RetweetOutlined.displayName = 'RetweetOutlined';
RetweetOutlined.inheritAttrs = false;
export default RetweetOutlined;