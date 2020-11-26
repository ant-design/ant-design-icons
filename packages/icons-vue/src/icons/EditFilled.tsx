// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditFilledSvg from '@ant-design/icons-svg/lib/asn/EditFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EditFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EditFilled: EditFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditFilledSvg}></AntdIcon>;
};

EditFilled.displayName = 'EditFilled';
EditFilled.inheritAttrs = false;
export default EditFilled;