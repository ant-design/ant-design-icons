// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InsertRowBelowOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowBelowOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InsertRowBelowOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InsertRowBelowOutlined: InsertRowBelowOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InsertRowBelowOutlinedSvg}></AntdIcon>;
};

InsertRowBelowOutlined.displayName = 'InsertRowBelowOutlined';
InsertRowBelowOutlined.inheritAttrs = false;
export default InsertRowBelowOutlined;