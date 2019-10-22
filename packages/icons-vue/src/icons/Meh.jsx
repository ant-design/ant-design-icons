
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MehOutlineSvg from '@ant-design/icons-svg/lib/outline/MehOutline';

export default {
  name: 'Meh',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MehOutlineSvg } },
      children
    ),
};
