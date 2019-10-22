
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudServerOutlineSvg from '@ant-design/icons-svg/lib/outline/CloudServerOutline';

export default {
  name: 'CloudServer',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudServerOutlineSvg } },
      children
    ),
};
