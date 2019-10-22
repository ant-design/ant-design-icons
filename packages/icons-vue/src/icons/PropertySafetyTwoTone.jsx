
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PropertySafetyTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PropertySafetyTwoTone';

export default {
  name: 'PropertySafetyTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PropertySafetyTwoToneSvg } },
      children
    ),
};
