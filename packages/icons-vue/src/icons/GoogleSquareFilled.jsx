
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GoogleSquareFillSvg from '@ant-design/icons-svg/lib/fill/GoogleSquareFill';

export default {
  name: 'IconGoogleSquareFilled',
  displayName: 'GoogleSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoogleSquareFillSvg } },
      children
    ),
};
