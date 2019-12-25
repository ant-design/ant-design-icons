// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FundTwoToneSvg from '@ant-design/icons-svg/lib/asn/FundTwoTone';

export default {
  name: 'IconFundTwoTone',
  displayName: 'FundTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FundTwoToneSvg } },
      children,
    ),
};