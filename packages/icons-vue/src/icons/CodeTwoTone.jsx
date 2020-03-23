// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CodeTwoTone';

export default {
  name: 'IconCodeTwoTone',
  displayName: 'CodeTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodeTwoToneSvg } },
      children,
    ),
};