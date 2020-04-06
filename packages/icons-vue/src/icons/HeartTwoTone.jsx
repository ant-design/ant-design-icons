// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HeartTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTwoTone';

export default {
  name: 'IconHeartTwoTone',
  displayName: 'HeartTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HeartTwoToneSvg } },
      children,
    ),
};