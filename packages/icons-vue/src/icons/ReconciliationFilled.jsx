
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ReconciliationFillSvg from '@ant-design/icons-svg/lib/fill/ReconciliationFill';

export default {
  name: 'IconReconciliationFilled',
  displayName: 'ReconciliationFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReconciliationFillSvg } },
      children
    ),
};
