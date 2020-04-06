// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownSquareTwoTone';

export default {
  name: 'IconDownSquareTwoTone',
  displayName: 'DownSquareTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DownSquareTwoToneSvg } },
      children,
    ),
};