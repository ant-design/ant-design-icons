
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InteractionTwoToneSvg from '@ant-design/icons-svg/lib/twotone/InteractionTwoTone';

export default {
  name: 'IconInteractionTwoTone',
  displayName: 'InteractionTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InteractionTwoToneSvg } },
      children
    ),
};
