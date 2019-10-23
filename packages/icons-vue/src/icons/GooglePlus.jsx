
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GooglePlusOutlineSvg from '@ant-design/icons-svg/lib/outline/GooglePlusOutline';

export default {
  name: 'IconGooglePlus',
  displayName: 'GooglePlus',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GooglePlusOutlineSvg } },
      children
    ),
};
