// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IeSquareFilledSvg from '@ant-design/icons-svg/lib/asn/IeSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IeSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IeSquareFilled: IeSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IeSquareFilledSvg}></AntdIcon>;
};

IeSquareFilled.displayName = 'IeSquareFilled';
IeSquareFilled.inheritAttrs = false;
export default IeSquareFilled;