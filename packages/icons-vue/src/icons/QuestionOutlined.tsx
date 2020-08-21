// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import QuestionOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={QuestionOutlinedSvg}></AntdIcon>;
};

QuestionOutlined.displayName = 'QuestionOutlined';
QuestionOutlined.inheritAttrs = false;
export default QuestionOutlined;