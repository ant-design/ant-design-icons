// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EllipsisOutlinedSvg from '@ant-design/icons-svg/lib/asn/EllipsisOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EllipsisOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EllipsisOutlined: EllipsisOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EllipsisOutlinedSvg}></AntdIcon>;
};

EllipsisOutlined.displayName = 'EllipsisOutlined';
EllipsisOutlined.inheritAttrs = false;
export default EllipsisOutlined;