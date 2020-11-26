// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChromeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ChromeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChromeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChromeOutlined: ChromeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeOutlinedSvg}></AntdIcon>;
};

ChromeOutlined.displayName = 'ChromeOutlined';
ChromeOutlined.inheritAttrs = false;
export default ChromeOutlined;