// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FieldNumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldNumberOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FieldNumberOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FieldNumberOutlinedSvg}></AntdIcon>;
};

FieldNumberOutlined.displayName = 'FieldNumberOutlined';
FieldNumberOutlined.inheritAttrs = false;
export default FieldNumberOutlined;