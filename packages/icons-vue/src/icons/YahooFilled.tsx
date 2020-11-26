// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import YahooFilledSvg from '@ant-design/icons-svg/lib/asn/YahooFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface YahooFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const YahooFilled: YahooFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YahooFilledSvg}></AntdIcon>;
};

YahooFilled.displayName = 'YahooFilled';
YahooFilled.inheritAttrs = false;
export default YahooFilled;