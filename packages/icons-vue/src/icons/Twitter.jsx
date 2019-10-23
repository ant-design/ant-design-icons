
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TwitterOutlineSvg from '@ant-design/icons-svg/lib/outline/TwitterOutline';

export default {
  name: 'IconTwitter',
  displayName: 'Twitter',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TwitterOutlineSvg } },
      children
    ),
};
