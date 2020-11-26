// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InsuranceTwoToneSvg from '@ant-design/icons-svg/lib/asn/InsuranceTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InsuranceTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InsuranceTwoTone: InsuranceTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InsuranceTwoToneSvg}></AntdIcon>;
};

InsuranceTwoTone.displayName = 'InsuranceTwoTone';
InsuranceTwoTone.inheritAttrs = false;
export default InsuranceTwoTone;