
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DatabaseFillSvg from '@ant-design/icons-svg/lib/fill/DatabaseFill';

export default {
  name: 'IconDatabaseFilled',
  displayName: 'DatabaseFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DatabaseFillSvg } },
      children
    ),
};
