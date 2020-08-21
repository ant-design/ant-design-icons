// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FieldTimeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldTimeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FieldTimeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FieldTimeOutlinedSvg}></AntdIcon>;
};

FieldTimeOutlined.displayName = 'FieldTimeOutlined';
FieldTimeOutlined.inheritAttrs = false;
export default FieldTimeOutlined;