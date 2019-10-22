
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RocketFillSvg from '@ant-design/icons-svg/lib/fill/RocketFill';

export default {
  name: 'RocketFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RocketFillSvg } },
      children
    ),
};
