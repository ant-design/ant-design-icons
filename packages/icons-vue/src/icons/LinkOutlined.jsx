// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkOutlined';

export default {
  name: 'IconLinkOutlined',
  displayName: 'LinkOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LinkOutlinedSvg } },
      children,
    ),
};