// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeFilledSvg from '@ant-design/icons-svg/lib/asn/HomeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeFilled: HomeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeFilledSvg}></AntdIcon>;
};

HomeFilled.displayName = 'HomeFilled';
HomeFilled.inheritAttrs = false;
export default HomeFilled;