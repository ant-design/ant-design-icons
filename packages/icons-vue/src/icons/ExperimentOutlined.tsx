// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ExperimentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExperimentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExperimentOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExperimentOutlinedSvg}></AntdIcon>;
};

ExperimentOutlined.displayName = 'ExperimentOutlined';
ExperimentOutlined.inheritAttrs = false;
export default ExperimentOutlined;