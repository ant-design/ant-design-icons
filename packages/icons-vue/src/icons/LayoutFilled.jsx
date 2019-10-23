
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LayoutFillSvg from '@ant-design/icons-svg/lib/fill/LayoutFill';

export default {
  name: 'IconLayoutFilled',
  displayName: 'LayoutFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LayoutFillSvg } },
      children
    ),
};
