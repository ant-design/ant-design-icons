
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ControlFillSvg from '@ant-design/icons-svg/lib/fill/ControlFill';

export default {
  name: 'IconControlFilled',
  displayName: 'ControlFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ControlFillSvg } },
      children
    ),
};
