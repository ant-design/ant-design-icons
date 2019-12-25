// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseOutlined';

export default {
  name: 'IconCloseOutlined',
  displayName: 'CloseOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloseOutlinedSvg } },
      children,
    ),
};