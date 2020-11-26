// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IdcardTwoToneSvg from '@ant-design/icons-svg/lib/asn/IdcardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IdcardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IdcardTwoTone: IdcardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IdcardTwoToneSvg}></AntdIcon>;
};

IdcardTwoTone.displayName = 'IdcardTwoTone';
IdcardTwoTone.inheritAttrs = false;
export default IdcardTwoTone;