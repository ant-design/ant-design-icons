// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WarningOutlinedSvg from '@ant-design/icons-svg/lib/asn/WarningOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WarningOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WarningOutlined: WarningOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WarningOutlinedSvg}></AntdIcon>;
};

WarningOutlined.displayName = 'WarningOutlined';
WarningOutlined.inheritAttrs = false;
export default WarningOutlined;