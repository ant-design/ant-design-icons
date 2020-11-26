// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOutlined: FolderOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOutlinedSvg}></AntdIcon>;
};

FolderOutlined.displayName = 'FolderOutlined';
FolderOutlined.inheritAttrs = false;
export default FolderOutlined;