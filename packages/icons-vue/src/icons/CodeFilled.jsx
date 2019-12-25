// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodeFilledSvg from '@ant-design/icons-svg/lib/asn/CodeFilled';

export default {
  name: 'IconCodeFilled',
  displayName: 'CodeFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodeFilledSvg } },
      children,
    ),
};