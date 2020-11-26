// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuestionCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuestionCircleFilled: QuestionCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionCircleFilledSvg}></AntdIcon>;
};

QuestionCircleFilled.displayName = 'QuestionCircleFilled';
QuestionCircleFilled.inheritAttrs = false;
export default QuestionCircleFilled;