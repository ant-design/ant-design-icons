// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOpenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOpenOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOpenOutlined: FolderOpenOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenOutlinedSvg}></AntdIcon>;
};

FolderOpenOutlined.displayName = 'FolderOpenOutlined';
FolderOpenOutlined.inheritAttrs = false;
export default FolderOpenOutlined;