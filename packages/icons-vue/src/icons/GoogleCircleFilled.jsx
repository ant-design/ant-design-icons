
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GoogleCircleFillSvg from '@ant-design/icons-svg/lib/fill/GoogleCircleFill';

export default {
  name: 'IconGoogleCircleFilled',
  displayName: 'GoogleCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoogleCircleFillSvg } },
      children
    ),
};
