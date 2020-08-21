// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FormOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FormOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormOutlinedSvg}></AntdIcon>;
};

FormOutlined.displayName = 'FormOutlined';
FormOutlined.inheritAttrs = false;
export default FormOutlined;