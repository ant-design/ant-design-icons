// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileUnknownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileUnknownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileUnknownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileUnknownTwoTone: FileUnknownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileUnknownTwoToneSvg}></AntdIcon>;
};

FileUnknownTwoTone.displayName = 'FileUnknownTwoTone';
FileUnknownTwoTone.inheritAttrs = false;
export default FileUnknownTwoTone;