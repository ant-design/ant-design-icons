
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YoutubeOutlineSvg from '@ant-design/icons-svg/lib/outline/YoutubeOutline';

export default {
  name: 'IconYoutube',
  displayName: 'Youtube',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YoutubeOutlineSvg } },
      children
    ),
};
