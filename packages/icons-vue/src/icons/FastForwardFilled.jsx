
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FastForwardFillSvg from '@ant-design/icons-svg/lib/fill/FastForwardFill';

export default {
  name: 'FastForwardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FastForwardFillSvg } },
      children
    ),
};
