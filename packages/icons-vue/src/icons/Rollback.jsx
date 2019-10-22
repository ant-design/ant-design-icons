
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RollbackOutlineSvg from '@ant-design/icons-svg/lib/outline/RollbackOutline';

export default {
  name: 'Rollback',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RollbackOutlineSvg } },
      children
    ),
};
