
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RedditSquareFillSvg from '@ant-design/icons-svg/lib/fill/RedditSquareFill';

export default {
  name: 'IconRedditSquareFilled',
  displayName: 'RedditSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedditSquareFillSvg } },
      children
    ),
};
