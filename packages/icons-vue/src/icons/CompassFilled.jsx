
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CompassFillSvg from '@ant-design/icons-svg/lib/fill/CompassFill';

export default {
  name: 'CompassFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CompassFillSvg } },
      children
    ),
};
