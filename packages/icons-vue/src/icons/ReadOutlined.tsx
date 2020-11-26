// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReadOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReadOutlined: ReadOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReadOutlinedSvg}></AntdIcon>;
};

ReadOutlined.displayName = 'ReadOutlined';
ReadOutlined.inheritAttrs = false;
export default ReadOutlined;