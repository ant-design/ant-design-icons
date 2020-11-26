// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlagOutlinedSvg from '@ant-design/icons-svg/lib/asn/FlagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlagOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlagOutlined: FlagOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlagOutlinedSvg}></AntdIcon>;
};

FlagOutlined.displayName = 'FlagOutlined';
FlagOutlined.inheritAttrs = false;
export default FlagOutlined;