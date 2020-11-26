// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InsertRowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InsertRowLeftOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InsertRowLeftOutlined: InsertRowLeftOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InsertRowLeftOutlinedSvg}></AntdIcon>;
};

InsertRowLeftOutlined.displayName = 'InsertRowLeftOutlined';
InsertRowLeftOutlined.inheritAttrs = false;
export default InsertRowLeftOutlined;