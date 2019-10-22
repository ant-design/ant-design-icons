
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PropertySafetyOutlineSvg from '@ant-design/icons-svg/lib/outline/PropertySafetyOutline';

export default {
  name: 'PropertySafety',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PropertySafetyOutlineSvg } },
      children
    ),
};
