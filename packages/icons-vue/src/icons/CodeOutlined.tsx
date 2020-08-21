// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeOutlinedSvg}></AntdIcon>;
};

CodeOutlined.displayName = 'CodeOutlined';
CodeOutlined.inheritAttrs = false;
export default CodeOutlined;