// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudTwoTone: CloudTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudTwoToneSvg}></AntdIcon>;
};

CloudTwoTone.displayName = 'CloudTwoTone';
CloudTwoTone.inheritAttrs = false;
export default CloudTwoTone;