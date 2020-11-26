// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BehanceSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BehanceSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BehanceSquareOutlined: BehanceSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BehanceSquareOutlinedSvg}></AntdIcon>;
};

BehanceSquareOutlined.displayName = 'BehanceSquareOutlined';
BehanceSquareOutlined.inheritAttrs = false;
export default BehanceSquareOutlined;