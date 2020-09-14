// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FieldStringOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldStringOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FieldStringOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FieldStringOutlinedSvg}></AntdIcon>;
};

FieldStringOutlined.displayName = 'FieldStringOutlined';
FieldStringOutlined.inheritAttrs = false;
export default FieldStringOutlined;