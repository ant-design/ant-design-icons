
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckOutlineSvg from '@ant-design/icons-svg/lib/outline/CheckOutline';

export default {
  name: 'IconCheck',
  displayName: 'Check',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckOutlineSvg } },
      children
    ),
};
