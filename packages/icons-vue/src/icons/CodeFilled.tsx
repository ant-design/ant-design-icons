// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeFilledSvg from '@ant-design/icons-svg/lib/asn/CodeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeFilled: CodeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeFilledSvg}></AntdIcon>;
};

CodeFilled.displayName = 'CodeFilled';
CodeFilled.inheritAttrs = false;
export default CodeFilled;