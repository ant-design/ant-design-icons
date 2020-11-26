// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BulbOutlinedSvg from '@ant-design/icons-svg/lib/asn/BulbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BulbOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BulbOutlined: BulbOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulbOutlinedSvg}></AntdIcon>;
};

BulbOutlined.displayName = 'BulbOutlined';
BulbOutlined.inheritAttrs = false;
export default BulbOutlined;