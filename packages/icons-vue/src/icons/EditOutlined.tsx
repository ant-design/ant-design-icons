// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditOutlinedSvg from '@ant-design/icons-svg/lib/asn/EditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EditOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EditOutlined: EditOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditOutlinedSvg}></AntdIcon>;
};

EditOutlined.displayName = 'EditOutlined';
EditOutlined.inheritAttrs = false;
export default EditOutlined;