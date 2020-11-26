// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilePdfTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePdfTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilePdfTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilePdfTwoTone: FilePdfTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePdfTwoToneSvg}></AntdIcon>;
};

FilePdfTwoTone.displayName = 'FilePdfTwoTone';
FilePdfTwoTone.inheritAttrs = false;
export default FilePdfTwoTone;