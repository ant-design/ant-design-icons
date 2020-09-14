// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CodeFilledSvg from '@ant-design/icons-svg/lib/asn/CodeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CodeFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeFilledSvg}></AntdIcon>;
};

CodeFilled.displayName = 'CodeFilled';
CodeFilled.inheritAttrs = false;
export default CodeFilled;