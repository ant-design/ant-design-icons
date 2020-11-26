// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PlusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PlusCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PlusCircleOutlined: PlusCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusCircleOutlinedSvg}></AntdIcon>;
};

PlusCircleOutlined.displayName = 'PlusCircleOutlined';
PlusCircleOutlined.inheritAttrs = false;
export default PlusCircleOutlined;