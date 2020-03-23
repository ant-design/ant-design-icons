// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PictureOutlinedSvg from '@ant-design/icons-svg/lib/asn/PictureOutlined';

export default {
  name: 'IconPictureOutlined',
  displayName: 'PictureOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PictureOutlinedSvg } },
      children,
    ),
};