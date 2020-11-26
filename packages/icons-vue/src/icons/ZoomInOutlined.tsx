// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ZoomInOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomInOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ZoomInOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ZoomInOutlined: ZoomInOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZoomInOutlinedSvg}></AntdIcon>;
};

ZoomInOutlined.displayName = 'ZoomInOutlined';
ZoomInOutlined.inheritAttrs = false;
export default ZoomInOutlined;