// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YahooFilledSvg from '@ant-design/icons-svg/lib/asn/YahooFilled';

export default {
  name: 'IconYahooFilled',
  displayName: 'YahooFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: YahooFilledSvg } },
      children,
    ),
};