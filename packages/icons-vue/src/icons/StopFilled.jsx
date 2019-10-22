
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StopFillSvg from '@ant-design/icons-svg/lib/fill/StopFill';

export default {
  name: 'StopFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StopFillSvg } },
      children
    ),
};
