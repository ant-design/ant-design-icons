// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilePdfFilledSvg from '@ant-design/icons-svg/lib/asn/FilePdfFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilePdfFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilePdfFilled: FilePdfFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePdfFilledSvg}></AntdIcon>;
};

FilePdfFilled.displayName = 'FilePdfFilled';
FilePdfFilled.inheritAttrs = false;
export default FilePdfFilled;