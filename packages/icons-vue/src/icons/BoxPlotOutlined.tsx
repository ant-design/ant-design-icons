// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BoxPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoxPlotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BoxPlotOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxPlotOutlinedSvg}></AntdIcon>;
};

BoxPlotOutlined.displayName = 'BoxPlotOutlined';
BoxPlotOutlined.inheritAttrs = false;
export default BoxPlotOutlined;