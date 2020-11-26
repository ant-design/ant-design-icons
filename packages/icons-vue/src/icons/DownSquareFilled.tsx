// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DownSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DownSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DownSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DownSquareFilled: DownSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownSquareFilledSvg}></AntdIcon>;
};

DownSquareFilled.displayName = 'DownSquareFilled';
DownSquareFilled.inheritAttrs = false;
export default DownSquareFilled;