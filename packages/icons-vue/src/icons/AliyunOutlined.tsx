// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AliyunOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliyunOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AliyunOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AliyunOutlined: AliyunOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AliyunOutlinedSvg}></AntdIcon>;
};

AliyunOutlined.displayName = 'AliyunOutlined';
AliyunOutlined.inheritAttrs = false;
export default AliyunOutlined;