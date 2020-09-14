// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SmileOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmileOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileOutlinedSvg}></AntdIcon>;
};

SmileOutlined.displayName = 'SmileOutlined';
SmileOutlined.inheritAttrs = false;
export default SmileOutlined;