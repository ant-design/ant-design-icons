
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FlagOutlineSvg from '@ant-design/icons-svg/lib/outline/FlagOutline';

export default {
  name: 'Flag',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FlagOutlineSvg } },
      children
    ),
};
