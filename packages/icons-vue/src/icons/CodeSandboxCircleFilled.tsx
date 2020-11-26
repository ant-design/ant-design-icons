// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeSandboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeSandboxCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeSandboxCircleFilled: CodeSandboxCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeSandboxCircleFilledSvg}></AntdIcon>;
};

CodeSandboxCircleFilled.displayName = 'CodeSandboxCircleFilled';
CodeSandboxCircleFilled.inheritAttrs = false;
export default CodeSandboxCircleFilled;