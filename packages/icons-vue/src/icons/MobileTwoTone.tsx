// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MobileTwoToneSvg from '@ant-design/icons-svg/lib/asn/MobileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MobileTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileTwoToneSvg}></AntdIcon>;
};

MobileTwoTone.displayName = 'MobileTwoTone';
MobileTwoTone.inheritAttrs = false;
export default MobileTwoTone;