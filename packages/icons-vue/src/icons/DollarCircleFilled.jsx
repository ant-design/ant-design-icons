
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DollarCircleFillSvg from '@ant-design/icons-svg/lib/fill/DollarCircleFill';

export default {
  name: 'DollarCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DollarCircleFillSvg } },
      children
    ),
};
