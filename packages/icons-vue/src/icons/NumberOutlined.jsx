// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import NumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/NumberOutlined';

export default {
  name: 'IconNumberOutlined',
  displayName: 'NumberOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: NumberOutlinedSvg } },
      children,
    ),
};