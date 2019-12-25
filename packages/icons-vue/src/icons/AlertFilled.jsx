// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled';

export default {
  name: 'IconAlertFilled',
  displayName: 'AlertFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlertFilledSvg } },
      children,
    ),
};