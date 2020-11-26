// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignRightOutlined: AlignRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignRightOutlinedSvg}></AntdIcon>;
};

AlignRightOutlined.displayName = 'AlignRightOutlined';
AlignRightOutlined.inheritAttrs = false;
export default AlignRightOutlined;