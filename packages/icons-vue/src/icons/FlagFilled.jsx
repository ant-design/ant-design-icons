
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FlagFillSvg from '@ant-design/icons-svg/lib/fill/FlagFill';

export default {
  name: 'FlagFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FlagFillSvg } },
      children
    ),
};
