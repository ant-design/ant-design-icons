// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AliwangwangOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliwangwangOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AliwangwangOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AliwangwangOutlined: AliwangwangOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AliwangwangOutlinedSvg}></AntdIcon>;
};

AliwangwangOutlined.displayName = 'AliwangwangOutlined';
AliwangwangOutlined.inheritAttrs = false;
export default AliwangwangOutlined;