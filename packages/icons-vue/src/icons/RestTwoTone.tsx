// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RestTwoToneSvg from '@ant-design/icons-svg/lib/asn/RestTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RestTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RestTwoTone: RestTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestTwoToneSvg}></AntdIcon>;
};

RestTwoTone.displayName = 'RestTwoTone';
RestTwoTone.inheritAttrs = false;
export default RestTwoTone;