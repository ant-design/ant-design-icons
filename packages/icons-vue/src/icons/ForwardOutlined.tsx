// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardOutlined: ForwardOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardOutlinedSvg}></AntdIcon>;
};

ForwardOutlined.displayName = 'ForwardOutlined';
ForwardOutlined.inheritAttrs = false;
export default ForwardOutlined;