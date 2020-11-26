// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BulbFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BulbFilled: BulbFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulbFilledSvg}></AntdIcon>;
};

BulbFilled.displayName = 'BulbFilled';
BulbFilled.inheritAttrs = false;
export default BulbFilled;