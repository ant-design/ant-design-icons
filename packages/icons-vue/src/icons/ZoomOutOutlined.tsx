// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ZoomOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomOutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ZoomOutOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ZoomOutOutlined: ZoomOutOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZoomOutOutlinedSvg}></AntdIcon>;
};

ZoomOutOutlined.displayName = 'ZoomOutOutlined';
ZoomOutOutlined.inheritAttrs = false;
export default ZoomOutOutlined;