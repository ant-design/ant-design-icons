// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretUpFilledSvg from '@ant-design/icons-svg/lib/asn/CaretUpFilled';

export default {
  name: 'IconCaretUpFilled',
  displayName: 'CaretUpFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CaretUpFilledSvg } },
      children,
    ),
};