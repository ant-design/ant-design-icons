// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuestionCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuestionCircleTwoTone: QuestionCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionCircleTwoToneSvg}></AntdIcon>;
};

QuestionCircleTwoTone.displayName = 'QuestionCircleTwoTone';
QuestionCircleTwoTone.inheritAttrs = false;
export default QuestionCircleTwoTone;