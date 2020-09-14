// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RestOutlinedSvg from '@ant-design/icons-svg/lib/asn/RestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestOutlinedSvg}></AntdIcon>;
};

RestOutlined.displayName = 'RestOutlined';
RestOutlined.inheritAttrs = false;
export default RestOutlined;