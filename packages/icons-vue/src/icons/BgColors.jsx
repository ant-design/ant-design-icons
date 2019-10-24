
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BgColorsOutlineSvg from '@ant-design/icons-svg/lib/outline/BgColorsOutline';

export default {
  name: 'IconBgColors',
  displayName: 'BgColors',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BgColorsOutlineSvg } },
      children
    ),
};
