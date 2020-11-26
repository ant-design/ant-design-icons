// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlusOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlusOutlined: PlusOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusOutlinedSvg}></AntdIcon>;
};

PlusOutlined.displayName = 'PlusOutlined';
PlusOutlined.inheritAttrs = false;
export default PlusOutlined;