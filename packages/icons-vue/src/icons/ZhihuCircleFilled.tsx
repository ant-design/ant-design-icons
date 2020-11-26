// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ZhihuCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ZhihuCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ZhihuCircleFilled: ZhihuCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZhihuCircleFilledSvg}></AntdIcon>;
};

ZhihuCircleFilled.displayName = 'ZhihuCircleFilled';
ZhihuCircleFilled.inheritAttrs = false;
export default ZhihuCircleFilled;