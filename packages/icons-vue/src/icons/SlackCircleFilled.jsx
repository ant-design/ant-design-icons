// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlackCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SlackCircleFilled';

export default {
  name: 'IconSlackCircleFilled',
  displayName: 'SlackCircleFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SlackCircleFilledSvg } },
      children,
    ),
};