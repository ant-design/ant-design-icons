// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FundTwoToneSvg from '@ant-design/icons-svg/lib/asn/FundTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FundTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FundTwoTone: FundTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FundTwoToneSvg}></AntdIcon>;
};

FundTwoTone.displayName = 'FundTwoTone';
FundTwoTone.inheritAttrs = false;
export default FundTwoTone;