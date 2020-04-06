// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpCircleOutlined';

export default {
  name: 'IconUpCircleOutlined',
  displayName: 'UpCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UpCircleOutlinedSvg } },
      children,
    ),
};