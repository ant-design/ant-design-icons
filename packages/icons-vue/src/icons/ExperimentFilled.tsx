// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExperimentFilledSvg from '@ant-design/icons-svg/lib/asn/ExperimentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExperimentFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExperimentFilled: ExperimentFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExperimentFilledSvg}></AntdIcon>;
};

ExperimentFilled.displayName = 'ExperimentFilled';
ExperimentFilled.inheritAttrs = false;
export default ExperimentFilled;