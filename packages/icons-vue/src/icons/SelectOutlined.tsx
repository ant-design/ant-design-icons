// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SelectOutlinedSvg from '@ant-design/icons-svg/lib/asn/SelectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SelectOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SelectOutlinedSvg}></AntdIcon>;
};

SelectOutlined.displayName = 'SelectOutlined';
SelectOutlined.inheritAttrs = false;
export default SelectOutlined;