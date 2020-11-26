// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ZhihuSquareFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ZhihuSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ZhihuSquareFilled: ZhihuSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZhihuSquareFilledSvg}></AntdIcon>;
};

ZhihuSquareFilled.displayName = 'ZhihuSquareFilled';
ZhihuSquareFilled.inheritAttrs = false;
export default ZhihuSquareFilled;