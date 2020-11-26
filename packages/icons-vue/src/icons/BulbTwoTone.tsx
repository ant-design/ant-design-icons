// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BulbTwoToneSvg from '@ant-design/icons-svg/lib/asn/BulbTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BulbTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BulbTwoTone: BulbTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulbTwoToneSvg}></AntdIcon>;
};

BulbTwoTone.displayName = 'BulbTwoTone';
BulbTwoTone.inheritAttrs = false;
export default BulbTwoTone;