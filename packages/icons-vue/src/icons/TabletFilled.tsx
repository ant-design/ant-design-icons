// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TabletFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TabletFilled: TabletFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TabletFilledSvg}></AntdIcon>;
};

TabletFilled.displayName = 'TabletFilled';
TabletFilled.inheritAttrs = false;
export default TabletFilled;