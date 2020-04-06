// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CiOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiOutlined';

export default {
  name: 'IconCiOutlined',
  displayName: 'CiOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CiOutlinedSvg } },
      children,
    ),
};