// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone';

export default {
  name: 'IconThunderboltTwoTone',
  displayName: 'ThunderboltTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ThunderboltTwoToneSvg } },
      children,
    ),
};