
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import OrderedListOutlineSvg from '@ant-design/icons-svg/lib/outline/OrderedListOutline';

export default {
  name: 'IconOrderedList',
  displayName: 'OrderedList',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: OrderedListOutlineSvg } },
      children
    ),
};
