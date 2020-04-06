// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RotateRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateRightOutlined';

export default {
  name: 'IconRotateRightOutlined',
  displayName: 'RotateRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RotateRightOutlinedSvg } },
      children,
    ),
};