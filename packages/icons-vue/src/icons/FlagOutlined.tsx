// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FlagOutlinedSvg from '@ant-design/icons-svg/lib/asn/FlagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlagOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagOutlinedSvg}></AntdIcon>;
};

FlagOutlined.displayName = 'FlagOutlined';
FlagOutlined.inheritAttrs = false;
export default FlagOutlined;