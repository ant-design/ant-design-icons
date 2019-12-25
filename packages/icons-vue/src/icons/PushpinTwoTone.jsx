// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PushpinTwoToneSvg from '@ant-design/icons-svg/lib/asn/PushpinTwoTone';

export default {
  name: 'IconPushpinTwoTone',
  displayName: 'PushpinTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PushpinTwoToneSvg } },
      children,
    ),
};