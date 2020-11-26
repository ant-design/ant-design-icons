// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IeOutlinedSvg from '@ant-design/icons-svg/lib/asn/IeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IeOutlined: IeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IeOutlinedSvg}></AntdIcon>;
};

IeOutlined.displayName = 'IeOutlined';
IeOutlined.inheritAttrs = false;
export default IeOutlined;