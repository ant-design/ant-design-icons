// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EnterOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnterOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EnterOutlinedSvg}></AntdIcon>;
};

EnterOutlined.displayName = 'EnterOutlined';
EnterOutlined.inheritAttrs = false;
export default EnterOutlined;