// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeSandboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeSandboxSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeSandboxSquareFilled: CodeSandboxSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeSandboxSquareFilledSvg}></AntdIcon>;
};

CodeSandboxSquareFilled.displayName = 'CodeSandboxSquareFilled';
CodeSandboxSquareFilled.inheritAttrs = false;
export default CodeSandboxSquareFilled;