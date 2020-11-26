// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import OneToOneOutlinedSvg from '@ant-design/icons-svg/lib/asn/OneToOneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface OneToOneOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const OneToOneOutlined: OneToOneOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OneToOneOutlinedSvg}></AntdIcon>;
};

OneToOneOutlined.displayName = 'OneToOneOutlined';
OneToOneOutlined.inheritAttrs = false;
export default OneToOneOutlined;