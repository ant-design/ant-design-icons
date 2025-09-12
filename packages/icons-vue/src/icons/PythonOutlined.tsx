// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PythonOutlinedSvg from '@ant-design/icons-svg/lib/asn/PythonOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PythonOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PythonOutlined: PythonOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PythonOutlinedSvg}></AntdIcon>;
};

PythonOutlined.displayName = 'PythonOutlined';
PythonOutlined.inheritAttrs = false;
export default PythonOutlined;