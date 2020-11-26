// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderOpenTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOpenTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOpenTwoTone: FolderOpenTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenTwoToneSvg}></AntdIcon>;
};

FolderOpenTwoTone.displayName = 'FolderOpenTwoTone';
FolderOpenTwoTone.inheritAttrs = false;
export default FolderOpenTwoTone;