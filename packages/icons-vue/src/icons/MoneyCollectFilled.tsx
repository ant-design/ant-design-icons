// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyCollectFilledSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyCollectFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyCollectFilled: MoneyCollectFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyCollectFilledSvg}></AntdIcon>;
};

MoneyCollectFilled.displayName = 'MoneyCollectFilled';
MoneyCollectFilled.inheritAttrs = false;
export default MoneyCollectFilled;