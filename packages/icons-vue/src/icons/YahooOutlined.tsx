// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import YahooOutlinedSvg from '@ant-design/icons-svg/lib/asn/YahooOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface YahooOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const YahooOutlined: YahooOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YahooOutlinedSvg}></AntdIcon>;
};

YahooOutlined.displayName = 'YahooOutlined';
YahooOutlined.inheritAttrs = false;
export default YahooOutlined;