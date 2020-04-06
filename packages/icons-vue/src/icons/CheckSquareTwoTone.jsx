// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckSquareTwoTone';

export default {
  name: 'IconCheckSquareTwoTone',
  displayName: 'CheckSquareTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CheckSquareTwoToneSvg } },
      children,
    ),
};