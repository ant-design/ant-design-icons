// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WarningFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WarningFilledSvg}></AntdIcon>;
};

WarningFilled.displayName = 'WarningFilled';
WarningFilled.inheritAttrs = false;
export default WarningFilled;