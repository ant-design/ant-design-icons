// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone';

export default {
  name: 'IconStarTwoTone',
  displayName: 'StarTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StarTwoToneSvg } },
      children,
    ),
};