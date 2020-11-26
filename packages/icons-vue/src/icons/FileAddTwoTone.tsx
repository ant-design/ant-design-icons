// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileAddTwoTone: FileAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileAddTwoToneSvg}></AntdIcon>;
};

FileAddTwoTone.displayName = 'FileAddTwoTone';
FileAddTwoTone.inheritAttrs = false;
export default FileAddTwoTone;