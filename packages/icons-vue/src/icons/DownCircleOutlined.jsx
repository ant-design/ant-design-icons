// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownCircleOutlined';

export default {
  name: 'IconDownCircleOutlined',
  displayName: 'DownCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DownCircleOutlinedSvg } },
      children,
    ),
};