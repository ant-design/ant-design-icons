// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DropboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/DropboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DropboxOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DropboxOutlined: DropboxOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropboxOutlinedSvg}></AntdIcon>;
};

DropboxOutlined.displayName = 'DropboxOutlined';
DropboxOutlined.inheritAttrs = false;
export default DropboxOutlined;