// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LeftOutlined: LeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeftOutlinedSvg}></AntdIcon>;
};

LeftOutlined.displayName = 'LeftOutlined';
LeftOutlined.inheritAttrs = false;
export default LeftOutlined;