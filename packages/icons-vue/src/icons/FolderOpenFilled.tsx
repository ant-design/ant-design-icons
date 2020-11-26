// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenFilledSvg from '@ant-design/icons-svg/lib/asn/FolderOpenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOpenFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOpenFilled: FolderOpenFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenFilledSvg}></AntdIcon>;
};

FolderOpenFilled.displayName = 'FolderOpenFilled';
FolderOpenFilled.inheritAttrs = false;
export default FolderOpenFilled;