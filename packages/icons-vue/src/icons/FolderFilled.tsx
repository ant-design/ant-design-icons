// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderFilledSvg from '@ant-design/icons-svg/lib/asn/FolderFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderFilledSvg}></AntdIcon>;
};

FolderFilled.displayName = 'FolderFilled';
FolderFilled.inheritAttrs = false;
export default FolderFilled;