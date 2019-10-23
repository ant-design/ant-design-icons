
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SafetyCertificateFillSvg from '@ant-design/icons-svg/lib/fill/SafetyCertificateFill';

export default {
  name: 'IconSafetyCertificateFilled',
  displayName: 'SafetyCertificateFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SafetyCertificateFillSvg } },
      children
    ),
};
