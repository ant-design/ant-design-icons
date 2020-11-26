// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiffOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiffOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiffOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiffOutlined: DiffOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiffOutlinedSvg}></AntdIcon>;
};

DiffOutlined.displayName = 'DiffOutlined';
DiffOutlined.inheritAttrs = false;
export default DiffOutlined;