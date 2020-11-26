// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderAddFilledSvg from '@ant-design/icons-svg/lib/asn/FolderAddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderAddFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderAddFilled: FolderAddFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddFilledSvg}></AntdIcon>;
};

FolderAddFilled.displayName = 'FolderAddFilled';
FolderAddFilled.inheritAttrs = false;
export default FolderAddFilled;