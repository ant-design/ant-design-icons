// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DisconnectOutlinedSvg from '@ant-design/icons-svg/lib/asn/DisconnectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DisconnectOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DisconnectOutlinedSvg}></AntdIcon>;
};

DisconnectOutlined.displayName = 'DisconnectOutlined';
DisconnectOutlined.inheritAttrs = false;
export default DisconnectOutlined;