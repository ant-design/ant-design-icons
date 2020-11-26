// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeleteColumnOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteColumnOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeleteColumnOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeleteColumnOutlined: DeleteColumnOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteColumnOutlinedSvg}></AntdIcon>;
};

DeleteColumnOutlined.displayName = 'DeleteColumnOutlined';
DeleteColumnOutlined.inheritAttrs = false;
export default DeleteColumnOutlined;