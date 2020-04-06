// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MinusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MinusCircleFilled';

export default {
  name: 'IconMinusCircleFilled',
  displayName: 'MinusCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MinusCircleFilledSvg } },
      children,
    ),
};