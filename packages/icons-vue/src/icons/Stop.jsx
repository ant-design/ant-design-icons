
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StopOutlineSvg from '@ant-design/icons-svg/lib/outline/StopOutline';

export default {
  name: 'IconStop',
  displayName: 'Stop',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StopOutlineSvg } },
      children
    ),
};
