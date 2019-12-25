// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FundViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundViewOutlined';

export default {
  name: 'IconFundViewOutlined',
  displayName: 'FundViewOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FundViewOutlinedSvg } },
      children,
    ),
};