
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TableOutlineSvg from '@ant-design/icons-svg/lib/outline/TableOutline';

export default {
  name: 'Table',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TableOutlineSvg } },
      children
    ),
};
