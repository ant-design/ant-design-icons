// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FullscreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FullscreenOutlined';

export default {
  name: 'IconFullscreenOutlined',
  displayName: 'FullscreenOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FullscreenOutlinedSvg } },
      children,
    ),
};