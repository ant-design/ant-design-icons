// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTextTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileTextTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileTextTwoTone: FileTextTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileTextTwoToneSvg}></AntdIcon>;
};

FileTextTwoTone.displayName = 'FileTextTwoTone';
FileTextTwoTone.inheritAttrs = false;
export default FileTextTwoTone;