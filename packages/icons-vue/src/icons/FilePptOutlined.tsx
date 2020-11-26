// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FilePptOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePptOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FilePptOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FilePptOutlined: FilePptOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePptOutlinedSvg}></AntdIcon>;
};

FilePptOutlined.displayName = 'FilePptOutlined';
FilePptOutlined.inheritAttrs = false;
export default FilePptOutlined;