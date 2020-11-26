// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderAddOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderAddOutlined: FolderAddOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddOutlinedSvg}></AntdIcon>;
};

FolderAddOutlined.displayName = 'FolderAddOutlined';
FolderAddOutlined.inheritAttrs = false;
export default FolderAddOutlined;