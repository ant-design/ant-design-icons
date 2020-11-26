// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AntDesignOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AntDesignOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AntDesignOutlined: AntDesignOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AntDesignOutlinedSvg}></AntdIcon>;
};

AntDesignOutlined.displayName = 'AntDesignOutlined';
AntDesignOutlined.inheritAttrs = false;
export default AntDesignOutlined;