// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DribbbleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DribbbleSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DribbbleSquareFilled: DribbbleSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DribbbleSquareFilledSvg}></AntdIcon>;
};

DribbbleSquareFilled.displayName = 'DribbbleSquareFilled';
DribbbleSquareFilled.inheritAttrs = false;
export default DribbbleSquareFilled;