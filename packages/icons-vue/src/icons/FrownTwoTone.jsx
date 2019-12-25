// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FrownTwoTone';

export default {
  name: 'IconFrownTwoTone',
  displayName: 'FrownTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FrownTwoToneSvg } },
      children,
    ),
};