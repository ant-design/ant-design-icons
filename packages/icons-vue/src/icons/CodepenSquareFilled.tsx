// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodepenSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodepenSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodepenSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodepenSquareFilled: CodepenSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodepenSquareFilledSvg}></AntdIcon>;
};

CodepenSquareFilled.displayName = 'CodepenSquareFilled';
CodepenSquareFilled.inheritAttrs = false;
export default CodepenSquareFilled;