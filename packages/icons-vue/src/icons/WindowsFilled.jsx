
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WindowsFillSvg from '@ant-design/icons-svg/lib/fill/WindowsFill';

export default {
  name: 'WindowsFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WindowsFillSvg } },
      children
    ),
};
