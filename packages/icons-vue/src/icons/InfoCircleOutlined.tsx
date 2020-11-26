// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InfoCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InfoCircleOutlined: InfoCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleOutlinedSvg}></AntdIcon>;
};

InfoCircleOutlined.displayName = 'InfoCircleOutlined';
InfoCircleOutlined.inheritAttrs = false;
export default InfoCircleOutlined;