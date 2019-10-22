
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MailOutlineSvg from '@ant-design/icons-svg/lib/outline/MailOutline';

export default {
  name: 'Mail',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MailOutlineSvg } },
      children
    ),
};
