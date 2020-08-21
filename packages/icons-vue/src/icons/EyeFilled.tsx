// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EyeFilledSvg from '@ant-design/icons-svg/lib/asn/EyeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeFilledSvg}></AntdIcon>;
};

EyeFilled.displayName = 'EyeFilled';
EyeFilled.inheritAttrs = false;
export default EyeFilled;