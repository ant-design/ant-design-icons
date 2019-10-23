
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BellFillSvg from '@ant-design/icons-svg/lib/fill/BellFill';

export default {
  name: 'IconBellFilled',
  displayName: 'BellFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BellFillSvg } },
      children
    ),
};
