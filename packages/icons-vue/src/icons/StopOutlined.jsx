// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StopOutlinedSvg from '@ant-design/icons-svg/lib/asn/StopOutlined';

export default {
  name: 'IconStopOutlined',
  displayName: 'StopOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StopOutlinedSvg } },
      children,
    ),
};