// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyCollectOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyCollectOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyCollectOutlined: MoneyCollectOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyCollectOutlinedSvg}></AntdIcon>;
};

MoneyCollectOutlined.displayName = 'MoneyCollectOutlined';
MoneyCollectOutlined.inheritAttrs = false;
export default MoneyCollectOutlined;