// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuestionOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuestionOutlined: QuestionOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionOutlinedSvg}></AntdIcon>;
};

QuestionOutlined.displayName = 'QuestionOutlined';
QuestionOutlined.inheritAttrs = false;
export default QuestionOutlined;