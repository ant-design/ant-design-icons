// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PauseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseCircleOutlined';

export default {
  name: 'IconPauseCircleOutlined',
  displayName: 'PauseCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PauseCircleOutlinedSvg } },
      children,
    ),
};