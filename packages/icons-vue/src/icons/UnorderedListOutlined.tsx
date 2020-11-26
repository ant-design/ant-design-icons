// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnorderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnorderedListOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnorderedListOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnorderedListOutlined: UnorderedListOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnorderedListOutlinedSvg}></AntdIcon>;
};

UnorderedListOutlined.displayName = 'UnorderedListOutlined';
UnorderedListOutlined.inheritAttrs = false;
export default UnorderedListOutlined;