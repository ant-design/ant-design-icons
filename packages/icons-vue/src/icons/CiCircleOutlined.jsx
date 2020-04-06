// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CiCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiCircleOutlined';

export default {
  name: 'IconCiCircleOutlined',
  displayName: 'CiCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CiCircleOutlinedSvg } },
      children,
    ),
};