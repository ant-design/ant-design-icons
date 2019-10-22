
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlertTwoToneSvg from '@ant-design/icons-svg/lib/twotone/AlertTwoTone';

export default {
  name: 'AlertTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlertTwoToneSvg } },
      children
    ),
};
