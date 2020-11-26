// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PushpinOutlinedSvg from '@ant-design/icons-svg/lib/asn/PushpinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PushpinOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PushpinOutlined: PushpinOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PushpinOutlinedSvg}></AntdIcon>;
};

PushpinOutlined.displayName = 'PushpinOutlined';
PushpinOutlined.inheritAttrs = false;
export default PushpinOutlined;