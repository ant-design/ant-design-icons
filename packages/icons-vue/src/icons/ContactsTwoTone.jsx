// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContactsTwoTone';

export default {
  name: 'IconContactsTwoTone',
  displayName: 'ContactsTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ContactsTwoToneSvg } },
      children,
    ),
};