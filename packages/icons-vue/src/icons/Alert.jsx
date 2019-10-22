
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlertOutlineSvg from '@ant-design/icons-svg/lib/outline/AlertOutline';

export default {
  name: 'Alert',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlertOutlineSvg } },
      children
    ),
};
