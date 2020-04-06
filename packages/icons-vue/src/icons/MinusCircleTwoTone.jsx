// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MinusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusCircleTwoTone';

export default {
  name: 'IconMinusCircleTwoTone',
  displayName: 'MinusCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MinusCircleTwoToneSvg } },
      children,
    ),
};