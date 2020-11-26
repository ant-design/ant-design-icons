// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SnippetsTwoToneSvg from '@ant-design/icons-svg/lib/asn/SnippetsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SnippetsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SnippetsTwoTone: SnippetsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SnippetsTwoToneSvg}></AntdIcon>;
};

SnippetsTwoTone.displayName = 'SnippetsTwoTone';
SnippetsTwoTone.inheritAttrs = false;
export default SnippetsTwoTone;