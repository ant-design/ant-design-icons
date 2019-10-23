
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SkinTwoToneSvg from '@ant-design/icons-svg/lib/twotone/SkinTwoTone';

export default {
  name: 'IconSkinTwoTone',
  displayName: 'SkinTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkinTwoToneSvg } },
      children
    ),
};
