// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileSyncOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileSyncOutlined: FileSyncOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileSyncOutlinedSvg}></AntdIcon>;
};

FileSyncOutlined.displayName = 'FileSyncOutlined';
FileSyncOutlined.inheritAttrs = false;
export default FileSyncOutlined;