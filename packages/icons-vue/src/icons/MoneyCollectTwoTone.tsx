// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyCollectTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyCollectTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyCollectTwoTone: MoneyCollectTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyCollectTwoToneSvg}></AntdIcon>;
};

MoneyCollectTwoTone.displayName = 'MoneyCollectTwoTone';
MoneyCollectTwoTone.inheritAttrs = false;
export default MoneyCollectTwoTone;