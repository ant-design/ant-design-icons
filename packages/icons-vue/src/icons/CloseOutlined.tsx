// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseOutlined: CloseOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseOutlinedSvg}></AntdIcon>;
};

CloseOutlined.displayName = 'CloseOutlined';
CloseOutlined.inheritAttrs = false;
export default CloseOutlined;