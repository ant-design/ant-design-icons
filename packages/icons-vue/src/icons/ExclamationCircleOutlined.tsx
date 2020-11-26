// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExclamationCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExclamationCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExclamationCircleOutlined: ExclamationCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExclamationCircleOutlinedSvg}></AntdIcon>;
};

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
ExclamationCircleOutlined.inheritAttrs = false;
export default ExclamationCircleOutlined;