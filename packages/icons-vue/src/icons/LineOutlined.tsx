// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LineOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LineOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LineOutlined: LineOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LineOutlinedSvg}></AntdIcon>;
};

LineOutlined.displayName = 'LineOutlined';
LineOutlined.inheritAttrs = false;
export default LineOutlined;