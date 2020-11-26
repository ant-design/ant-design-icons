// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Html5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Html5TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Html5TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Html5TwoTone: Html5TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Html5TwoToneSvg}></AntdIcon>;
};

Html5TwoTone.displayName = 'Html5TwoTone';
Html5TwoTone.inheritAttrs = false;
export default Html5TwoTone;