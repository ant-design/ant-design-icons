
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MediumWorkmarkOutlineSvg from '@ant-design/icons-svg/lib/outline/MediumWorkmarkOutline';

export default {
  name: 'IconMediumWorkmark',
  displayName: 'MediumWorkmark',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MediumWorkmarkOutlineSvg } },
      children
    ),
};
