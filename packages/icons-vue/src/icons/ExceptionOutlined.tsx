// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExceptionOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExceptionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExceptionOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExceptionOutlined: ExceptionOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExceptionOutlinedSvg}></AntdIcon>;
};

ExceptionOutlined.displayName = 'ExceptionOutlined';
ExceptionOutlined.inheritAttrs = false;
export default ExceptionOutlined;