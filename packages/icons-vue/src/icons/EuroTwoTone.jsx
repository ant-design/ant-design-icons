// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EuroTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroTwoTone';

export default {
  name: 'IconEuroTwoTone',
  displayName: 'EuroTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EuroTwoToneSvg } },
      children,
    ),
};