// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DisconnectOutlinedSvg from '@ant-design/icons-svg/lib/asn/DisconnectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DisconnectOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DisconnectOutlined: DisconnectOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DisconnectOutlinedSvg}></AntdIcon>;
};

DisconnectOutlined.displayName = 'DisconnectOutlined';
DisconnectOutlined.inheritAttrs = false;
export default DisconnectOutlined;