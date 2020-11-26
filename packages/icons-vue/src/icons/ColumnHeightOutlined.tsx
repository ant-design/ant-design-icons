// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColumnHeightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnHeightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColumnHeightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColumnHeightOutlined: ColumnHeightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColumnHeightOutlinedSvg}></AntdIcon>;
};

ColumnHeightOutlined.displayName = 'ColumnHeightOutlined';
ColumnHeightOutlined.inheritAttrs = false;
export default ColumnHeightOutlined;