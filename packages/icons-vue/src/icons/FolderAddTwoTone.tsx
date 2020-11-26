// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderAddTwoTone: FolderAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddTwoToneSvg}></AntdIcon>;
};

FolderAddTwoTone.displayName = 'FolderAddTwoTone';
FolderAddTwoTone.inheritAttrs = false;
export default FolderAddTwoTone;