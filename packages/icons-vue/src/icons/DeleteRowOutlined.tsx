// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeleteRowOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteRowOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeleteRowOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeleteRowOutlined: DeleteRowOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteRowOutlinedSvg}></AntdIcon>;
};

DeleteRowOutlined.displayName = 'DeleteRowOutlined';
DeleteRowOutlined.inheritAttrs = false;
export default DeleteRowOutlined;