// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import KeyOutlinedSvg from '@ant-design/icons-svg/lib/asn/KeyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KeyOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyOutlinedSvg}></AntdIcon>;
};

KeyOutlined.displayName = 'KeyOutlined';
KeyOutlined.inheritAttrs = false;
export default KeyOutlined;