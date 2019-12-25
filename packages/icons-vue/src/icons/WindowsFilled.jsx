// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WindowsFilledSvg from '@ant-design/icons-svg/lib/asn/WindowsFilled';

export default {
  name: 'IconWindowsFilled',
  displayName: 'WindowsFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WindowsFilledSvg } },
      children,
    ),
};