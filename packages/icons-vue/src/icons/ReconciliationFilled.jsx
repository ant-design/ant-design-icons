// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ReconciliationFilledSvg from '@ant-design/icons-svg/lib/asn/ReconciliationFilled';

export default {
  name: 'IconReconciliationFilled',
  displayName: 'ReconciliationFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ReconciliationFilledSvg } },
      children,
    ),
};