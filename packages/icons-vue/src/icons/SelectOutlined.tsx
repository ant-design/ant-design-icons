// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SelectOutlinedSvg from '@ant-design/icons-svg/lib/asn/SelectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SelectOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SelectOutlined: SelectOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SelectOutlinedSvg}></AntdIcon>;
};

SelectOutlined.displayName = 'SelectOutlined';
SelectOutlined.inheritAttrs = false;
export default SelectOutlined;