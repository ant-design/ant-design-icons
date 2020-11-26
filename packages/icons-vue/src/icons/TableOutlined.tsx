// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TableOutlinedSvg from '@ant-design/icons-svg/lib/asn/TableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TableOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TableOutlined: TableOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TableOutlinedSvg}></AntdIcon>;
};

TableOutlined.displayName = 'TableOutlined';
TableOutlined.inheritAttrs = false;
export default TableOutlined;