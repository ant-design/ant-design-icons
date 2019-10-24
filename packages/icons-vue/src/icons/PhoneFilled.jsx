
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PhoneFillSvg from '@ant-design/icons-svg/lib/fill/PhoneFill';

export default {
  name: 'IconPhoneFilled',
  displayName: 'PhoneFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PhoneFillSvg } },
      children
    ),
};
