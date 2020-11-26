// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarOutlined: DollarOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarOutlinedSvg}></AntdIcon>;
};

DollarOutlined.displayName = 'DollarOutlined';
DollarOutlined.inheritAttrs = false;
export default DollarOutlined;