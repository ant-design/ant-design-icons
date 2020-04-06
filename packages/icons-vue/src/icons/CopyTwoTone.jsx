// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CopyTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyTwoTone';

export default {
  name: 'IconCopyTwoTone',
  displayName: 'CopyTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CopyTwoToneSvg } },
      children,
    ),
};