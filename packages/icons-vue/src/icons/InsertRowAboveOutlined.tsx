// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InsertRowAboveOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowAboveOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InsertRowAboveOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InsertRowAboveOutlined: InsertRowAboveOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InsertRowAboveOutlinedSvg}></AntdIcon>;
};

InsertRowAboveOutlined.displayName = 'InsertRowAboveOutlined';
InsertRowAboveOutlined.inheritAttrs = false;
export default InsertRowAboveOutlined;