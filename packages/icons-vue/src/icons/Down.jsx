
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownOutlineSvg from '@ant-design/icons-svg/lib/outline/DownOutline';

export default {
  name: 'Down',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownOutlineSvg } },
      children
    ),
};
