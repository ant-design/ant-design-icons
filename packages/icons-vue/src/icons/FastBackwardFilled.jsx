
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FastBackwardFillSvg from '@ant-design/icons-svg/lib/fill/FastBackwardFill';

export default {
  name: 'FastBackwardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FastBackwardFillSvg } },
      children
    ),
};
