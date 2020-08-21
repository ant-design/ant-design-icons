// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafetyOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafetyOutlinedSvg}></AntdIcon>;
};

SafetyOutlined.displayName = 'SafetyOutlined';
SafetyOutlined.inheritAttrs = false;
export default SafetyOutlined;