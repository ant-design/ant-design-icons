// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WarningTwoToneSvg from '@ant-design/icons-svg/lib/asn/WarningTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WarningTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WarningTwoToneSvg}></AntdIcon>;
};

WarningTwoTone.displayName = 'WarningTwoTone';
WarningTwoTone.inheritAttrs = false;
export default WarningTwoTone;