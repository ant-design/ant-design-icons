// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RestFilledSvg from '@ant-design/icons-svg/lib/asn/RestFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestFilledSvg}></AntdIcon>;
};

RestFilled.displayName = 'RestFilled';
RestFilled.inheritAttrs = false;
export default RestFilled;