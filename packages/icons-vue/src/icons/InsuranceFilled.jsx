// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InsuranceFilledSvg from '@ant-design/icons-svg/lib/asn/InsuranceFilled';

export default {
  name: 'IconInsuranceFilled',
  displayName: 'InsuranceFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InsuranceFilledSvg } },
      children,
    ),
};