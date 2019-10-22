
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import NotificationTwoToneSvg from '@ant-design/icons-svg/lib/twotone/NotificationTwoTone';

export default {
  name: 'NotificationTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: NotificationTwoToneSvg } },
      children
    ),
};
