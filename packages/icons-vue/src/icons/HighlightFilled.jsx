// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HighlightFilledSvg from '@ant-design/icons-svg/lib/asn/HighlightFilled';

export default {
  name: 'IconHighlightFilled',
  displayName: 'HighlightFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HighlightFilledSvg } },
      children,
    ),
};