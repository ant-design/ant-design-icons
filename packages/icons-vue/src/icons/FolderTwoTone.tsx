// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderTwoTone: FolderTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderTwoToneSvg}></AntdIcon>;
};

FolderTwoTone.displayName = 'FolderTwoTone';
FolderTwoTone.inheritAttrs = false;
export default FolderTwoTone;