
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MobileTwoToneSvg from '@ant-design/icons-svg/lib/twotone/MobileTwoTone';

export default {
  name: 'IconMobileTwoTone',
  displayName: 'MobileTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MobileTwoToneSvg } },
      children
    ),
};
