
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ArrowsAltOutlineSvg from '@ant-design/icons-svg/lib/outline/ArrowsAltOutline';

export default {
  name: 'ArrowsAlt',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowsAltOutlineSvg } },
      children
    ),
};
