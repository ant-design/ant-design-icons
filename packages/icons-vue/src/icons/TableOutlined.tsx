// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TableOutlinedSvg from '@ant-design/icons-svg/lib/asn/TableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TableOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TableOutlinedSvg}></AntdIcon>;
};

TableOutlined.displayName = 'TableOutlined';
TableOutlined.inheritAttrs = false;
export default TableOutlined;