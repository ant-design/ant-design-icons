// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderViewOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderViewOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderViewOutlined: FolderViewOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderViewOutlinedSvg}></AntdIcon>;
};

FolderViewOutlined.displayName = 'FolderViewOutlined';
FolderViewOutlined.inheritAttrs = false;
export default FolderViewOutlined;