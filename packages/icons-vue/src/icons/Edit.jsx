
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EditOutlineSvg from '@ant-design/icons-svg/lib/outline/EditOutline';

export default {
  name: 'IconEdit',
  displayName: 'Edit',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EditOutlineSvg } },
      children
    ),
};
