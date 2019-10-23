
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InstagramOutlineSvg from '@ant-design/icons-svg/lib/outline/InstagramOutline';

export default {
  name: 'IconInstagram',
  displayName: 'Instagram',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InstagramOutlineSvg } },
      children
    ),
};
