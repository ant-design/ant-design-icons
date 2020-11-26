// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignCenterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignCenterOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignCenterOutlined: AlignCenterOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignCenterOutlinedSvg}></AntdIcon>;
};

AlignCenterOutlined.displayName = 'AlignCenterOutlined';
AlignCenterOutlined.inheritAttrs = false;
export default AlignCenterOutlined;