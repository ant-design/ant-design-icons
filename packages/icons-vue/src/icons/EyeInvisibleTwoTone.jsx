
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/EyeInvisibleTwoTone';

export default {
  name: 'IconEyeInvisibleTwoTone',
  displayName: 'EyeInvisibleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeInvisibleTwoToneSvg } },
      children
    ),
};
