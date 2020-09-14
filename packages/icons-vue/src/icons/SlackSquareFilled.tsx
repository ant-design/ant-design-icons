// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SlackSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SlackSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlackSquareFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlackSquareFilledSvg}></AntdIcon>;
};

SlackSquareFilled.displayName = 'SlackSquareFilled';
SlackSquareFilled.inheritAttrs = false;
export default SlackSquareFilled;