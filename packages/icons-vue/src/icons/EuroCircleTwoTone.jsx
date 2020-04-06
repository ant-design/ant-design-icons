// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EuroCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroCircleTwoTone';

export default {
  name: 'IconEuroCircleTwoTone',
  displayName: 'EuroCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EuroCircleTwoToneSvg } },
      children,
    ),
};