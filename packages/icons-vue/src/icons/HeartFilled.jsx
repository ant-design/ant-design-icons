
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HeartFillSvg from '@ant-design/icons-svg/lib/fill/HeartFill';

export default {
  name: 'IconHeartFilled',
  displayName: 'HeartFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HeartFillSvg } },
      children
    ),
};
