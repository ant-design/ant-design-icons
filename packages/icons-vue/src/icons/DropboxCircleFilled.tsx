// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DropboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DropboxCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DropboxCircleFilled: DropboxCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropboxCircleFilledSvg}></AntdIcon>;
};

DropboxCircleFilled.displayName = 'DropboxCircleFilled';
DropboxCircleFilled.inheritAttrs = false;
export default DropboxCircleFilled;