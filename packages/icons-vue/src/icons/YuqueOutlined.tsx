// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import YuqueOutlinedSvg from '@ant-design/icons-svg/lib/asn/YuqueOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface YuqueOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const YuqueOutlined: YuqueOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={YuqueOutlinedSvg}></AntdIcon>;
};

YuqueOutlined.displayName = 'YuqueOutlined';
YuqueOutlined.inheritAttrs = false;
export default YuqueOutlined;