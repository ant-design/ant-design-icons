// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlusSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusSquareFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusSquareFilledSvg}></AntdIcon>;
};

PlusSquareFilled.displayName = 'PlusSquareFilled';
PlusSquareFilled.inheritAttrs = false;
export default PlusSquareFilled;