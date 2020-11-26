// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeSandboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeSandboxOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeSandboxOutlined: CodeSandboxOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeSandboxOutlinedSvg}></AntdIcon>;
};

CodeSandboxOutlined.displayName = 'CodeSandboxOutlined';
CodeSandboxOutlined.inheritAttrs = false;
export default CodeSandboxOutlined;