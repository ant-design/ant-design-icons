// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/BlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlockOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlockOutlined: BlockOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlockOutlinedSvg}></AntdIcon>;
};

BlockOutlined.displayName = 'BlockOutlined';
BlockOutlined.inheritAttrs = false;
export default BlockOutlined;