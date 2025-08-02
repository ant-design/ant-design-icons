// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OpenAIOutlinedSvg from '@ant-design/icons-svg/lib/asn/OpenAIOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OpenAIOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OpenAIOutlined: OpenAIOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OpenAIOutlinedSvg}></AntdIcon>;
};

OpenAIOutlined.displayName = 'OpenAIOutlined';
OpenAIOutlined.inheritAttrs = false;
export default OpenAIOutlined;