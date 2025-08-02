// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OpenAIFilledSvg from '@ant-design/icons-svg/lib/asn/OpenAIFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OpenAIFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OpenAIFilled: OpenAIFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OpenAIFilledSvg}></AntdIcon>;
};

OpenAIFilled.displayName = 'OpenAIFilled';
OpenAIFilled.inheritAttrs = false;
export default OpenAIFilled;