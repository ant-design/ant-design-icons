// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RotateLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RotateLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RotateLeftOutlined: RotateLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RotateLeftOutlinedSvg}></AntdIcon>;
};

RotateLeftOutlined.displayName = 'RotateLeftOutlined';
RotateLeftOutlined.inheritAttrs = false;
export default RotateLeftOutlined;