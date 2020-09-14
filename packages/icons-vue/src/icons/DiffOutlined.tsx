// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DiffOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiffOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiffOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiffOutlinedSvg}></AntdIcon>;
};

DiffOutlined.displayName = 'DiffOutlined';
DiffOutlined.inheritAttrs = false;
export default DiffOutlined;