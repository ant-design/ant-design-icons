// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EditTwoToneSvg from '@ant-design/icons-svg/lib/asn/EditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EditTwoTone: EditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EditTwoToneSvg}></AntdIcon>;
};

EditTwoTone.displayName = 'EditTwoTone';
EditTwoTone.inheritAttrs = false;
export default EditTwoTone;