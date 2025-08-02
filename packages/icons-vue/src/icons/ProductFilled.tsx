// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProductFilledSvg from '@ant-design/icons-svg/lib/asn/ProductFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProductFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProductFilled: ProductFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProductFilledSvg}></AntdIcon>;
};

ProductFilled.displayName = 'ProductFilled';
ProductFilled.inheritAttrs = false;
export default ProductFilled;