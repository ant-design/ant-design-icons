// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ImportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ImportOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ImportOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ImportOutlined: ImportOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ImportOutlinedSvg}></AntdIcon>;
};

ImportOutlined.displayName = 'ImportOutlined';
ImportOutlined.inheritAttrs = false;
export default ImportOutlined;