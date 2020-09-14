// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusCircleOutlinedSvg}></AntdIcon>;
};

PlusCircleOutlined.displayName = 'PlusCircleOutlined';
PlusCircleOutlined.inheritAttrs = false;
export default PlusCircleOutlined;