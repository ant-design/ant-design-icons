
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ReconciliationOutlineSvg from '@ant-design/icons-svg/lib/outline/ReconciliationOutline';

export default {
  name: 'Reconciliation',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReconciliationOutlineSvg } },
      children
    ),
};
