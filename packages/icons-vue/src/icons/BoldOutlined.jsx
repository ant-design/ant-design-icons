// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoldOutlined';

export default {
  name: 'IconBoldOutlined',
  displayName: 'BoldOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BoldOutlinedSvg } },
      children,
    ),
};