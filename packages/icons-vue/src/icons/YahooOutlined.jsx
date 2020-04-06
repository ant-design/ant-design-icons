// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YahooOutlinedSvg from '@ant-design/icons-svg/lib/asn/YahooOutlined';

export default {
  name: 'IconYahooOutlined',
  displayName: 'YahooOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: YahooOutlinedSvg } },
      children,
    ),
};