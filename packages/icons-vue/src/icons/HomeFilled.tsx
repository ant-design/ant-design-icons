// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeFilledSvg from '@ant-design/icons-svg/lib/asn/HomeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeFilledSvg}></AntdIcon>;
};

HomeFilled.displayName = 'HomeFilled';
HomeFilled.inheritAttrs = false;
export default HomeFilled;