
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PropertySafetyFillSvg from '@ant-design/icons-svg/lib/fill/PropertySafetyFill';

export default {
  name: 'PropertySafetyFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PropertySafetyFillSvg } },
      children
    ),
};
