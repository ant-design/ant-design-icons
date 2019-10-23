
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InteractionFillSvg from '@ant-design/icons-svg/lib/fill/InteractionFill';

export default {
  name: 'IconInteractionFilled',
  displayName: 'InteractionFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InteractionFillSvg } },
      children
    ),
};
