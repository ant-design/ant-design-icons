// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilePptTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePptTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilePptTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilePptTwoTone: FilePptTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePptTwoToneSvg}></AntdIcon>;
};

FilePptTwoTone.displayName = 'FilePptTwoTone';
FilePptTwoTone.inheritAttrs = false;
export default FilePptTwoTone;