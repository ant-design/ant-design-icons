
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BackwardFillSvg from '@ant-design/icons-svg/lib/fill/BackwardFill';

export default {
  name: 'IconBackwardFilled',
  displayName: 'BackwardFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BackwardFillSvg } },
      children
    ),
};
