// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SnippetsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SnippetsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SnippetsOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SnippetsOutlined: SnippetsOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SnippetsOutlinedSvg}></AntdIcon>;
};

SnippetsOutlined.displayName = 'SnippetsOutlined';
SnippetsOutlined.inheritAttrs = false;
export default SnippetsOutlined;