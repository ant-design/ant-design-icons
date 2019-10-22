
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GiftFillSvg from '@ant-design/icons-svg/lib/fill/GiftFill';

export default {
  name: 'GiftFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GiftFillSvg } },
      children
    ),
};
