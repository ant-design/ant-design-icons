// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Html5OutlinedSvg from '@ant-design/icons-svg/lib/asn/Html5Outlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Html5OutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Html5Outlined: Html5OutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Html5OutlinedSvg}></AntdIcon>;
};

Html5Outlined.displayName = 'Html5Outlined';
Html5Outlined.inheritAttrs = false;
export default Html5Outlined;