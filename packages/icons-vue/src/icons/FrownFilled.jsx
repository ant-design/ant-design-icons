
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FrownFillSvg from '@ant-design/icons-svg/lib/fill/FrownFill';

export default {
  name: 'IconFrownFilled',
  displayName: 'FrownFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FrownFillSvg } },
      children
    ),
};
