// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlertOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlertOutlined';

export default {
  name: 'IconAlertOutlined',
  displayName: 'AlertOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlertOutlinedSvg } },
      children,
    ),
};