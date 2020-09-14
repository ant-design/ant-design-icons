// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TabletFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TabletFilledSvg}></AntdIcon>;
};

TabletFilled.displayName = 'TabletFilled';
TabletFilled.inheritAttrs = false;
export default TabletFilled;