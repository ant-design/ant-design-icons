
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EnvironmentOutlineSvg from '@ant-design/icons-svg/lib/outline/EnvironmentOutline';

export default {
  name: 'Environment',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EnvironmentOutlineSvg } },
      children
    ),
};
