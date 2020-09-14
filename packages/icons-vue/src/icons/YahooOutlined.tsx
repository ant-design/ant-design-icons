// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import YahooOutlinedSvg from '@ant-design/icons-svg/lib/asn/YahooOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YahooOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YahooOutlinedSvg}></AntdIcon>;
};

YahooOutlined.displayName = 'YahooOutlined';
YahooOutlined.inheritAttrs = false;
export default YahooOutlined;