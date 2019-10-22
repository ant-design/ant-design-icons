
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RadiusUpleftOutlineSvg from '@ant-design/icons-svg/lib/outline/RadiusUpleftOutline';

export default {
  name: 'RadiusUpleft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusUpleftOutlineSvg } },
      children
    ),
};
