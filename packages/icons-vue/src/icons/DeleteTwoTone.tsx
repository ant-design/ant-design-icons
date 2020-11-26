// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeleteTwoToneSvg from '@ant-design/icons-svg/lib/asn/DeleteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeleteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeleteTwoTone: DeleteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteTwoToneSvg}></AntdIcon>;
};

DeleteTwoTone.displayName = 'DeleteTwoTone';
DeleteTwoTone.inheritAttrs = false;
export default DeleteTwoTone;