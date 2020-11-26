// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IeCircleFilledSvg from '@ant-design/icons-svg/lib/asn/IeCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IeCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IeCircleFilled: IeCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IeCircleFilledSvg}></AntdIcon>;
};

IeCircleFilled.displayName = 'IeCircleFilled';
IeCircleFilled.inheritAttrs = false;
export default IeCircleFilled;