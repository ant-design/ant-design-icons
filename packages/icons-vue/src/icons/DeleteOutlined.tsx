// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteOutlinedSvg}></AntdIcon>;
};

DeleteOutlined.displayName = 'DeleteOutlined';
DeleteOutlined.inheritAttrs = false;
export default DeleteOutlined;