
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlackCircleFillSvg from '@ant-design/icons-svg/lib/fill/SlackCircleFill';

export default {
  name: 'IconSlackCircleFilled',
  displayName: 'SlackCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlackCircleFillSvg } },
      children
    ),
};
