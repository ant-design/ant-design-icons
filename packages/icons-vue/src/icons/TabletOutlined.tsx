// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TabletOutlinedSvg from '@ant-design/icons-svg/lib/asn/TabletOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TabletOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TabletOutlined: TabletOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TabletOutlinedSvg}></AntdIcon>;
};

TabletOutlined.displayName = 'TabletOutlined';
TabletOutlined.inheritAttrs = false;
export default TabletOutlined;