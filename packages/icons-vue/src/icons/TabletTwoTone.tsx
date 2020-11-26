// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TabletTwoToneSvg from '@ant-design/icons-svg/lib/asn/TabletTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TabletTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TabletTwoTone: TabletTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TabletTwoToneSvg}></AntdIcon>;
};

TabletTwoTone.displayName = 'TabletTwoTone';
TabletTwoTone.inheritAttrs = false;
export default TabletTwoTone;