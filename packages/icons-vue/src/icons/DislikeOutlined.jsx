// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DislikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/DislikeOutlined';

export default {
  name: 'IconDislikeOutlined',
  displayName: 'DislikeOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DislikeOutlinedSvg } },
      children,
    ),
};