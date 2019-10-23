
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GooglePlusCircleFillSvg from '@ant-design/icons-svg/lib/fill/GooglePlusCircleFill';

export default {
  name: 'IconGooglePlusCircleFilled',
  displayName: 'GooglePlusCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GooglePlusCircleFillSvg } },
      children
    ),
};
