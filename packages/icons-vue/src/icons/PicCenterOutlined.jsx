// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PicCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicCenterOutlined';

export default {
  name: 'IconPicCenterOutlined',
  displayName: 'PicCenterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PicCenterOutlinedSvg } },
      children,
    ),
};