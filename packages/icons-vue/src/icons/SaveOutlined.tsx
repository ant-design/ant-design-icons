// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveOutlinedSvg from '@ant-design/icons-svg/lib/asn/SaveOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveOutlined: SaveOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveOutlinedSvg}></AntdIcon>;
};

SaveOutlined.displayName = 'SaveOutlined';
SaveOutlined.inheritAttrs = false;
export default SaveOutlined;