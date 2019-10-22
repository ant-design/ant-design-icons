
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YahooOutlineSvg from '@ant-design/icons-svg/lib/outline/YahooOutline';

export default {
  name: 'Yahoo',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YahooOutlineSvg } },
      children
    ),
};
