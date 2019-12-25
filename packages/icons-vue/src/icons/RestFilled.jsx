// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RestFilledSvg from '@ant-design/icons-svg/lib/asn/RestFilled';

export default {
  name: 'IconRestFilled',
  displayName: 'RestFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RestFilledSvg } },
      children,
    ),
};