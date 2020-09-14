// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ColumnWidthOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ColumnWidthOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColumnWidthOutlinedSvg}></AntdIcon>;
};

ColumnWidthOutlined.displayName = 'ColumnWidthOutlined';
ColumnWidthOutlined.inheritAttrs = false;
export default ColumnWidthOutlined;