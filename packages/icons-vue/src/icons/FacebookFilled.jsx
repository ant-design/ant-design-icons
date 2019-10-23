
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FacebookFillSvg from '@ant-design/icons-svg/lib/fill/FacebookFill';

export default {
  name: 'IconFacebookFilled',
  displayName: 'FacebookFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FacebookFillSvg } },
      children
    ),
};
