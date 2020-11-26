// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EuroCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EuroCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EuroCircleOutlined: EuroCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EuroCircleOutlinedSvg}></AntdIcon>;
};

EuroCircleOutlined.displayName = 'EuroCircleOutlined';
EuroCircleOutlined.inheritAttrs = false;
export default EuroCircleOutlined;