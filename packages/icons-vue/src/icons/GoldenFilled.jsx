
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GoldenFillSvg from '@ant-design/icons-svg/lib/fill/GoldenFill';

export default {
  name: 'IconGoldenFilled',
  displayName: 'GoldenFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoldenFillSvg } },
      children
    ),
};
