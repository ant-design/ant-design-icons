// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeOutlined: CodeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeOutlinedSvg}></AntdIcon>;
};

CodeOutlined.displayName = 'CodeOutlined';
CodeOutlined.inheritAttrs = false;
export default CodeOutlined;