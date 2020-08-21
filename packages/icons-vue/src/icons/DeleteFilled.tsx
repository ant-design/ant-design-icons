// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeleteFilledSvg from '@ant-design/icons-svg/lib/asn/DeleteFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteFilledSvg}></AntdIcon>;
};

DeleteFilled.displayName = 'DeleteFilled';
DeleteFilled.inheritAttrs = false;
export default DeleteFilled;