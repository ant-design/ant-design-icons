// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EuroOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EuroOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EuroOutlined: EuroOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EuroOutlinedSvg}></AntdIcon>;
};

EuroOutlined.displayName = 'EuroOutlined';
EuroOutlined.inheritAttrs = false;
export default EuroOutlined;