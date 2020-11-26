// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodepenOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodepenOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodepenOutlined: CodepenOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodepenOutlinedSvg}></AntdIcon>;
};

CodepenOutlined.displayName = 'CodepenOutlined';
CodepenOutlined.inheritAttrs = false;
export default CodepenOutlined;