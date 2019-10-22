
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ForwardFillSvg from '@ant-design/icons-svg/lib/fill/ForwardFill';

export default {
  name: 'ForwardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ForwardFillSvg } },
      children
    ),
};
