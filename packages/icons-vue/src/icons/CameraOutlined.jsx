// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/CameraOutlined';

export default {
  name: 'IconCameraOutlined',
  displayName: 'CameraOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CameraOutlinedSvg } },
      children,
    ),
};