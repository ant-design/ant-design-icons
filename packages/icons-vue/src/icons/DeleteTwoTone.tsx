// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DeleteTwoToneSvg from '@ant-design/icons-svg/lib/asn/DeleteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeleteTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeleteTwoToneSvg}></AntdIcon>;
};

DeleteTwoTone.displayName = 'DeleteTwoTone';
DeleteTwoTone.inheritAttrs = false;
export default DeleteTwoTone;