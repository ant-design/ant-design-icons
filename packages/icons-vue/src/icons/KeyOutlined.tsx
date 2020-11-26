// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KeyOutlinedSvg from '@ant-design/icons-svg/lib/asn/KeyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KeyOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KeyOutlined: KeyOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KeyOutlinedSvg}></AntdIcon>;
};

KeyOutlined.displayName = 'KeyOutlined';
KeyOutlined.inheritAttrs = false;
export default KeyOutlined;