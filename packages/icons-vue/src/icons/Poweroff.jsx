
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PoweroffOutlineSvg from '@ant-design/icons-svg/lib/outline/PoweroffOutline';

export default {
  name: 'Poweroff',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PoweroffOutlineSvg } },
      children
    ),
};
