
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InsuranceFillSvg from '@ant-design/icons-svg/lib/fill/InsuranceFill';

export default {
  name: 'IconInsuranceFilled',
  displayName: 'InsuranceFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InsuranceFillSvg } },
      children
    ),
};
