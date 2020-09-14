// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusCircleFilledSvg}></AntdIcon>;
};

PlusCircleFilled.displayName = 'PlusCircleFilled';
PlusCircleFilled.inheritAttrs = false;
export default PlusCircleFilled;