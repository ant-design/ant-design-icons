
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CrownFillSvg from '@ant-design/icons-svg/lib/fill/CrownFill';

export default {
  name: 'CrownFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CrownFillSvg } },
      children
    ),
};
