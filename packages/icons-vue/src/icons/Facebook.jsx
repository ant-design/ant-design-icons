
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FacebookOutlineSvg from '@ant-design/icons-svg/lib/outline/FacebookOutline';

export default {
  name: 'IconFacebook',
  displayName: 'Facebook',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FacebookOutlineSvg } },
      children
    ),
};
