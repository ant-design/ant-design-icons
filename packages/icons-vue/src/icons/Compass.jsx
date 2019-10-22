
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CompassOutlineSvg from '@ant-design/icons-svg/lib/outline/CompassOutline';

export default {
  name: 'Compass',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CompassOutlineSvg } },
      children
    ),
};
