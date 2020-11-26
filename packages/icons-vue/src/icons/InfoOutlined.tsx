// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InfoOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InfoOutlined: InfoOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoOutlinedSvg}></AntdIcon>;
};

InfoOutlined.displayName = 'InfoOutlined';
InfoOutlined.inheritAttrs = false;
export default InfoOutlined;