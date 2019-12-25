// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FastBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastBackwardFilled';

export default {
  name: 'IconFastBackwardFilled',
  displayName: 'FastBackwardFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FastBackwardFilledSvg } },
      children,
    ),
};