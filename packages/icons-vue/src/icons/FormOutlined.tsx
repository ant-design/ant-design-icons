// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormOutlined: FormOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormOutlinedSvg}></AntdIcon>;
};

FormOutlined.displayName = 'FormOutlined';
FormOutlined.inheritAttrs = false;
export default FormOutlined;