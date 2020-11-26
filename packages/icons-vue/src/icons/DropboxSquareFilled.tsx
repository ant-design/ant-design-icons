// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DropboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DropboxSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DropboxSquareFilled: DropboxSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropboxSquareFilledSvg}></AntdIcon>;
};

DropboxSquareFilled.displayName = 'DropboxSquareFilled';
DropboxSquareFilled.inheritAttrs = false;
export default DropboxSquareFilled;