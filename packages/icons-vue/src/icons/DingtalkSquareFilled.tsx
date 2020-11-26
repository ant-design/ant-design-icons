// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DingtalkSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DingtalkSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DingtalkSquareFilled: DingtalkSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DingtalkSquareFilledSvg}></AntdIcon>;
};

DingtalkSquareFilled.displayName = 'DingtalkSquareFilled';
DingtalkSquareFilled.inheritAttrs = false;
export default DingtalkSquareFilled;