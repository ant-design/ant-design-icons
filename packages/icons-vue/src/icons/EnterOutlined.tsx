// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EnterOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EnterOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EnterOutlined: EnterOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EnterOutlinedSvg}></AntdIcon>;
};

EnterOutlined.displayName = 'EnterOutlined';
EnterOutlined.inheritAttrs = false;
export default EnterOutlined;