// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseSquareOutlined: CloseSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseSquareOutlinedSvg}></AntdIcon>;
};

CloseSquareOutlined.displayName = 'CloseSquareOutlined';
CloseSquareOutlined.inheritAttrs = false;
export default CloseSquareOutlined;