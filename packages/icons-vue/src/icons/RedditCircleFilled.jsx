
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RedditCircleFillSvg from '@ant-design/icons-svg/lib/fill/RedditCircleFill';

export default {
  name: 'RedditCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedditCircleFillSvg } },
      children
    ),
};
