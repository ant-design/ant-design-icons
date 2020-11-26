// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TwitterSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TwitterSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TwitterSquareFilled: TwitterSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TwitterSquareFilledSvg}></AntdIcon>;
};

TwitterSquareFilled.displayName = 'TwitterSquareFilled';
TwitterSquareFilled.inheritAttrs = false;
export default TwitterSquareFilled;