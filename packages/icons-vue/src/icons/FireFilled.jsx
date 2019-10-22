
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FireFillSvg from '@ant-design/icons-svg/lib/fill/FireFill';

export default {
  name: 'FireFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FireFillSvg } },
      children
    ),
};
