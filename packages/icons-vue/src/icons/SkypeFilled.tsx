// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SkypeFilledSvg from '@ant-design/icons-svg/lib/asn/SkypeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SkypeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SkypeFilled: SkypeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkypeFilledSvg}></AntdIcon>;
};

SkypeFilled.displayName = 'SkypeFilled';
SkypeFilled.inheritAttrs = false;
export default SkypeFilled;