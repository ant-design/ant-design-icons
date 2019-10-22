
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GoogleOutlineSvg from '@ant-design/icons-svg/lib/outline/GoogleOutline';

export default {
  name: 'Google',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoogleOutlineSvg } },
      children
    ),
};
