// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOutlinedSvg}></AntdIcon>;
};

FolderOutlined.displayName = 'FolderOutlined';
FolderOutlined.inheritAttrs = false;
export default FolderOutlined;