// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LineOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LineOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LineOutlinedSvg}></AntdIcon>;
};

LineOutlined.displayName = 'LineOutlined';
LineOutlined.inheritAttrs = false;
export default LineOutlined;