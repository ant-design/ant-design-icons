// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import YuqueFilledSvg from '@ant-design/icons-svg/lib/asn/YuqueFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface YuqueFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const YuqueFilled: YuqueFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YuqueFilledSvg}></AntdIcon>;
};

YuqueFilled.displayName = 'YuqueFilled';
YuqueFilled.inheritAttrs = false;
export default YuqueFilled;