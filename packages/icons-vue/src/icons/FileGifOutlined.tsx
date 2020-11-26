// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileGifOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileGifOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileGifOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileGifOutlined: FileGifOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileGifOutlinedSvg}></AntdIcon>;
};

FileGifOutlined.displayName = 'FileGifOutlined';
FileGifOutlined.inheritAttrs = false;
export default FileGifOutlined;