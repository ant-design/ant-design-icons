// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderFilledSvg from '@ant-design/icons-svg/lib/asn/FolderFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderFilled: FolderFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderFilledSvg}></AntdIcon>;
};

FolderFilled.displayName = 'FolderFilled';
FolderFilled.inheritAttrs = false;
export default FolderFilled;