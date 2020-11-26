// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CompressOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompressOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CompressOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CompressOutlined: CompressOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompressOutlinedSvg}></AntdIcon>;
};

CompressOutlined.displayName = 'CompressOutlined';
CompressOutlined.inheritAttrs = false;
export default CompressOutlined;