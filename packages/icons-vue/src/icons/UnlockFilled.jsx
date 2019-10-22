
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UnlockFillSvg from '@ant-design/icons-svg/lib/fill/UnlockFill';

export default {
  name: 'UnlockFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UnlockFillSvg } },
      children
    ),
};
