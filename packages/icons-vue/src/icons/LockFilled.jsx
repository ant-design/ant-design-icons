
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LockFillSvg from '@ant-design/icons-svg/lib/fill/LockFill';

export default {
  name: 'LockFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LockFillSvg } },
      children
    ),
};
