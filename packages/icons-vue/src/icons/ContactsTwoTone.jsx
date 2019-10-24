
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ContactsTwoTone';

export default {
  name: 'IconContactsTwoTone',
  displayName: 'ContactsTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ContactsTwoToneSvg } },
      children
    ),
};
