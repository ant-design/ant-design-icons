
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DatabaseOutlineSvg from '@ant-design/icons-svg/lib/outline/DatabaseOutline';

export default {
  name: 'Database',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DatabaseOutlineSvg } },
      children
    ),
};
