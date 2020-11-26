// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CodeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeTwoTone: CodeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeTwoToneSvg}></AntdIcon>;
};

CodeTwoTone.displayName = 'CodeTwoTone';
CodeTwoTone.inheritAttrs = false;
export default CodeTwoTone;