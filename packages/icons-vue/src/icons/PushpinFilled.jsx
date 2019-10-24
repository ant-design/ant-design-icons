
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PushpinFillSvg from '@ant-design/icons-svg/lib/fill/PushpinFill';

export default {
  name: 'IconPushpinFilled',
  displayName: 'PushpinFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PushpinFillSvg } },
      children
    ),
};
