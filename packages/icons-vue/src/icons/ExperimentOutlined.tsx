// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExperimentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExperimentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExperimentOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExperimentOutlined: ExperimentOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExperimentOutlinedSvg}></AntdIcon>;
};

ExperimentOutlined.displayName = 'ExperimentOutlined';
ExperimentOutlined.inheritAttrs = false;
export default ExperimentOutlined;