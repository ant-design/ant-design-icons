
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StarFillSvg from '@ant-design/icons-svg/lib/fill/StarFill';

export default {
  name: 'IconStarFilled',
  displayName: 'StarFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StarFillSvg } },
      children
    ),
};
