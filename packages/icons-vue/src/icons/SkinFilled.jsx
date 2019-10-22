
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SkinFillSvg from '@ant-design/icons-svg/lib/fill/SkinFill';

export default {
  name: 'SkinFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkinFillSvg } },
      children
    ),
};
