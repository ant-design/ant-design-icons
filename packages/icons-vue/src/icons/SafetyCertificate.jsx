
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SafetyCertificateOutlineSvg from '@ant-design/icons-svg/lib/outline/SafetyCertificateOutline';

export default {
  name: 'IconSafetyCertificate',
  displayName: 'SafetyCertificate',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SafetyCertificateOutlineSvg } },
      children
    ),
};
