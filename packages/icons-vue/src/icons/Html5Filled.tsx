// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Html5FilledSvg from '@ant-design/icons-svg/lib/asn/Html5Filled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Html5FilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Html5Filled: Html5FilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Html5FilledSvg}></AntdIcon>;
};

Html5Filled.displayName = 'Html5Filled';
Html5Filled.inheritAttrs = false;
export default Html5Filled;