
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LinkedinFillSvg from '@ant-design/icons-svg/lib/fill/LinkedinFill';

export default {
  name: 'LinkedinFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LinkedinFillSvg } },
      children
    ),
};
