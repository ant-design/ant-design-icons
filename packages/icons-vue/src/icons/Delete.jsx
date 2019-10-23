
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DeleteOutlineSvg from '@ant-design/icons-svg/lib/outline/DeleteOutline';

export default {
  name: 'IconDelete',
  displayName: 'Delete',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DeleteOutlineSvg } },
      children
    ),
};
