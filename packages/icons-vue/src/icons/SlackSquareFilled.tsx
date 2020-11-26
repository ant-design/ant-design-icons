// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlackSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SlackSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlackSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlackSquareFilled: SlackSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlackSquareFilledSvg}></AntdIcon>;
};

SlackSquareFilled.displayName = 'SlackSquareFilled';
SlackSquareFilled.inheritAttrs = false;
export default SlackSquareFilled;