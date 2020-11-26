// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedoOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedoOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedoOutlined: RedoOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedoOutlinedSvg}></AntdIcon>;
};

RedoOutlined.displayName = 'RedoOutlined';
RedoOutlined.inheritAttrs = false;
export default RedoOutlined;