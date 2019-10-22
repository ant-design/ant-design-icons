
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlertFillSvg from '@ant-design/icons-svg/lib/fill/AlertFill';

export default {
  name: 'AlertFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlertFillSvg } },
      children
    ),
};
