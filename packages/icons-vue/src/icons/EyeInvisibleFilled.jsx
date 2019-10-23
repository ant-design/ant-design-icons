
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EyeInvisibleFillSvg from '@ant-design/icons-svg/lib/fill/EyeInvisibleFill';

export default {
  name: 'IconEyeInvisibleFilled',
  displayName: 'EyeInvisibleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeInvisibleFillSvg } },
      children
    ),
};
