// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InsertRowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InsertRowRightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InsertRowRightOutlined: InsertRowRightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InsertRowRightOutlinedSvg}></AntdIcon>;
};

InsertRowRightOutlined.displayName = 'InsertRowRightOutlined';
InsertRowRightOutlined.inheritAttrs = false;
export default InsertRowRightOutlined;