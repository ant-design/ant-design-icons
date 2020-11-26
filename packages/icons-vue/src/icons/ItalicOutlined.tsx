// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ItalicOutlinedSvg from '@ant-design/icons-svg/lib/asn/ItalicOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ItalicOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ItalicOutlined: ItalicOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ItalicOutlinedSvg}></AntdIcon>;
};

ItalicOutlined.displayName = 'ItalicOutlined';
ItalicOutlined.inheritAttrs = false;
export default ItalicOutlined;