
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MoreOutlineSvg from '@ant-design/icons-svg/lib/outline/MoreOutline';

export default {
  name: 'IconMore',
  displayName: 'More',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MoreOutlineSvg } },
      children
    ),
};
