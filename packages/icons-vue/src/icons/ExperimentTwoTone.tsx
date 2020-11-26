// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExperimentTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExperimentTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExperimentTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExperimentTwoTone: ExperimentTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExperimentTwoToneSvg}></AntdIcon>;
};

ExperimentTwoTone.displayName = 'ExperimentTwoTone';
ExperimentTwoTone.inheritAttrs = false;
export default ExperimentTwoTone;