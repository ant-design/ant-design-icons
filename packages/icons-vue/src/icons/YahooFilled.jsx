
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YahooFillSvg from '@ant-design/icons-svg/lib/fill/YahooFill';

export default {
  name: 'YahooFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YahooFillSvg } },
      children
    ),
};
