// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled';

export default {
  name: 'IconLayoutFilled',
  displayName: 'LayoutFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LayoutFilledSvg } },
      children,
    ),
};