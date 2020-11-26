// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FileDoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileDoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FileDoneOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FileDoneOutlined: FileDoneOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileDoneOutlinedSvg}></AntdIcon>;
};

FileDoneOutlined.displayName = 'FileDoneOutlined';
FileDoneOutlined.inheritAttrs = false;
export default FileDoneOutlined;