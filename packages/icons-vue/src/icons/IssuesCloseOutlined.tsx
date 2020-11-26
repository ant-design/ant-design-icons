// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IssuesCloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/IssuesCloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IssuesCloseOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IssuesCloseOutlined: IssuesCloseOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IssuesCloseOutlinedSvg}></AntdIcon>;
};

IssuesCloseOutlined.displayName = 'IssuesCloseOutlined';
IssuesCloseOutlined.inheritAttrs = false;
export default IssuesCloseOutlined;