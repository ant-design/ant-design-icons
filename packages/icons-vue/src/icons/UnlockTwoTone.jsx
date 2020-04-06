// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UnlockTwoToneSvg from '@ant-design/icons-svg/lib/asn/UnlockTwoTone';

export default {
  name: 'IconUnlockTwoTone',
  displayName: 'UnlockTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UnlockTwoToneSvg } },
      children,
    ),
};