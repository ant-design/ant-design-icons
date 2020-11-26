// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilePdfOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePdfOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilePdfOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilePdfOutlined: FilePdfOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePdfOutlinedSvg}></AntdIcon>;
};

FilePdfOutlined.displayName = 'FilePdfOutlined';
FilePdfOutlined.inheritAttrs = false;
export default FilePdfOutlined;