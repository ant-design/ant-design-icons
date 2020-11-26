// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Loading3QuartersOutlinedSvg from '@ant-design/icons-svg/lib/asn/Loading3QuartersOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Loading3QuartersOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Loading3QuartersOutlined: Loading3QuartersOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Loading3QuartersOutlinedSvg}></AntdIcon>;
};

Loading3QuartersOutlined.displayName = 'Loading3QuartersOutlined';
Loading3QuartersOutlined.inheritAttrs = false;
export default Loading3QuartersOutlined;