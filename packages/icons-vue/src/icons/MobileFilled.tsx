// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MobileFilledSvg from '@ant-design/icons-svg/lib/asn/MobileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MobileFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileFilledSvg}></AntdIcon>;
};

MobileFilled.displayName = 'MobileFilled';
MobileFilled.inheritAttrs = false;
export default MobileFilled;