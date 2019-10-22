
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BorderVerticleOutlineSvg from '@ant-design/icons-svg/lib/outline/BorderVerticleOutline';

export default {
  name: 'BorderVerticle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BorderVerticleOutlineSvg } },
      children
    ),
};
