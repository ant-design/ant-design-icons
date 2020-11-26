// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ZhihuOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZhihuOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ZhihuOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ZhihuOutlined: ZhihuOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ZhihuOutlinedSvg}></AntdIcon>;
};

ZhihuOutlined.displayName = 'ZhihuOutlined';
ZhihuOutlined.inheritAttrs = false;
export default ZhihuOutlined;