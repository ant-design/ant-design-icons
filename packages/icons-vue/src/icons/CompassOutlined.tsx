// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CompassOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompassOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CompassOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CompassOutlined: CompassOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassOutlinedSvg}></AntdIcon>;
};

CompassOutlined.displayName = 'CompassOutlined';
CompassOutlined.inheritAttrs = false;
export default CompassOutlined;