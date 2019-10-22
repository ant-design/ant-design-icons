
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LinkOutlineSvg from '@ant-design/icons-svg/lib/outline/LinkOutline';

export default {
  name: 'Link',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LinkOutlineSvg } },
      children
    ),
};
