// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConsoleSqlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ConsoleSqlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConsoleSqlOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConsoleSqlOutlined: ConsoleSqlOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConsoleSqlOutlinedSvg}></AntdIcon>;
};

ConsoleSqlOutlined.displayName = 'ConsoleSqlOutlined';
ConsoleSqlOutlined.inheritAttrs = false;
export default ConsoleSqlOutlined;