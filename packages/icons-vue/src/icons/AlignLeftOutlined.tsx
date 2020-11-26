// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignLeftOutlined: AlignLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignLeftOutlinedSvg}></AntdIcon>;
};

AlignLeftOutlined.displayName = 'AlignLeftOutlined';
AlignLeftOutlined.inheritAttrs = false;
export default AlignLeftOutlined;