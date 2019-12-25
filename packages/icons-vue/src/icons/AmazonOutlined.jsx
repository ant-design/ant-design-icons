// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AmazonOutlinedSvg from '@ant-design/icons-svg/lib/asn/AmazonOutlined';

export default {
  name: 'IconAmazonOutlined',
  displayName: 'AmazonOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AmazonOutlinedSvg } },
      children,
    ),
};