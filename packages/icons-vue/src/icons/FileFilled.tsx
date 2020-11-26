// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileFilled: FileFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileFilledSvg}></AntdIcon>;
};

FileFilled.displayName = 'FileFilled';
FileFilled.inheritAttrs = false;
export default FileFilled;