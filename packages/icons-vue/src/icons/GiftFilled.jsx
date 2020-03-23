// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GiftFilledSvg from '@ant-design/icons-svg/lib/asn/GiftFilled';

export default {
  name: 'IconGiftFilled',
  displayName: 'GiftFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GiftFilledSvg } },
      children,
    ),
};