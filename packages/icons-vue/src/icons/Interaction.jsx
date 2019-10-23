
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InteractionOutlineSvg from '@ant-design/icons-svg/lib/outline/InteractionOutline';

export default {
  name: 'IconInteraction',
  displayName: 'Interaction',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InteractionOutlineSvg } },
      children
    ),
};
