
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlidersOutlineSvg from '@ant-design/icons-svg/lib/outline/SlidersOutline';

export default {
  name: 'Sliders',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlidersOutlineSvg } },
      children
    ),
};
