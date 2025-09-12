// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RubyOutlinedSvg from '@ant-design/icons-svg/lib/asn/RubyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RubyOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RubyOutlined: RubyOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RubyOutlinedSvg}></AntdIcon>;
};

RubyOutlined.displayName = 'RubyOutlined';
RubyOutlined.inheritAttrs = false;
export default RubyOutlined;