// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmileOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmileOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmileOutlined: SmileOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileOutlinedSvg}></AntdIcon>;
};

SmileOutlined.displayName = 'SmileOutlined';
SmileOutlined.inheritAttrs = false;
export default SmileOutlined;