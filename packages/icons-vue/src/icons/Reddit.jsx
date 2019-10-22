
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RedditOutlineSvg from '@ant-design/icons-svg/lib/outline/RedditOutline';

export default {
  name: 'Reddit',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedditOutlineSvg } },
      children
    ),
};
