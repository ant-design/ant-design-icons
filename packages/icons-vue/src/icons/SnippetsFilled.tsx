// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SnippetsFilledSvg from '@ant-design/icons-svg/lib/asn/SnippetsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SnippetsFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SnippetsFilled: SnippetsFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SnippetsFilledSvg}></AntdIcon>;
};

SnippetsFilled.displayName = 'SnippetsFilled';
SnippetsFilled.inheritAttrs = false;
export default SnippetsFilled;