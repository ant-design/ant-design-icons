// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionCircleFilledSvg}></AntdIcon>;
};

QuestionCircleFilled.displayName = 'QuestionCircleFilled';
QuestionCircleFilled.inheritAttrs = false;
export default QuestionCircleFilled;