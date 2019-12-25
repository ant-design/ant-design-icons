// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LayoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined';

export default {
  name: 'IconLayoutOutlined',
  displayName: 'LayoutOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LayoutOutlinedSvg } },
      children,
    ),
};