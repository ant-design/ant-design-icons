// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import QuestionCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface QuestionCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const QuestionCircleOutlined: QuestionCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionCircleOutlinedSvg}></AntdIcon>;
};

QuestionCircleOutlined.displayName = 'QuestionCircleOutlined';
QuestionCircleOutlined.inheritAttrs = false;
export default QuestionCircleOutlined;