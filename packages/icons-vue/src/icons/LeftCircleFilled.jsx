// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftCircleFilledSvg from '@ant-design/icons-svg/lib/asn/LeftCircleFilled';

export default {
  name: 'IconLeftCircleFilled',
  displayName: 'LeftCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LeftCircleFilledSvg } },
      children,
    ),
};