// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DollarCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DollarCircleFilled';

export default {
  name: 'IconDollarCircleFilled',
  displayName: 'DollarCircleFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DollarCircleFilledSvg } },
      children,
    ),
};