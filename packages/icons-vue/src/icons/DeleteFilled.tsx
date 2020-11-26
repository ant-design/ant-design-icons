// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeleteFilledSvg from '@ant-design/icons-svg/lib/asn/DeleteFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeleteFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeleteFilled: DeleteFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteFilledSvg}></AntdIcon>;
};

DeleteFilled.displayName = 'DeleteFilled';
DeleteFilled.inheritAttrs = false;
export default DeleteFilled;