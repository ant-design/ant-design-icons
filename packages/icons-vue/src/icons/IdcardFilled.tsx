// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IdcardFilledSvg from '@ant-design/icons-svg/lib/asn/IdcardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IdcardFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IdcardFilled: IdcardFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IdcardFilledSvg}></AntdIcon>;
};

IdcardFilled.displayName = 'IdcardFilled';
IdcardFilled.inheritAttrs = false;
export default IdcardFilled;