// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SnippetsFilledSvg from '@ant-design/icons-svg/lib/asn/SnippetsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetsFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SnippetsFilledSvg}></AntdIcon>;
};

SnippetsFilled.displayName = 'SnippetsFilled';
SnippetsFilled.inheritAttrs = false;
export default SnippetsFilled;