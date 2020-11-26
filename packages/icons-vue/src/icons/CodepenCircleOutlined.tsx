// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodepenCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodepenCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodepenCircleOutlined: CodepenCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodepenCircleOutlinedSvg}></AntdIcon>;
};

CodepenCircleOutlined.displayName = 'CodepenCircleOutlined';
CodepenCircleOutlined.inheritAttrs = false;
export default CodepenCircleOutlined;