
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusOutlineSvg from '@ant-design/icons-svg/lib/outline/PlusOutline';

export default {
  name: 'IconPlus',
  displayName: 'Plus',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusOutlineSvg } },
      children
    ),
};
