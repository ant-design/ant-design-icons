// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColumnWidthOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColumnWidthOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColumnWidthOutlined: ColumnWidthOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColumnWidthOutlinedSvg}></AntdIcon>;
};

ColumnWidthOutlined.displayName = 'ColumnWidthOutlined';
ColumnWidthOutlined.inheritAttrs = false;
export default ColumnWidthOutlined;