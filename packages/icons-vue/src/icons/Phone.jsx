
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PhoneOutlineSvg from '@ant-design/icons-svg/lib/outline/PhoneOutline';

export default {
  name: 'Phone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PhoneOutlineSvg } },
      children
    ),
};
