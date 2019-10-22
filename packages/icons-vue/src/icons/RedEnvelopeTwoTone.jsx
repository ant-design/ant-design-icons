
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RedEnvelopeTwoToneSvg from '@ant-design/icons-svg/lib/twotone/RedEnvelopeTwoTone';

export default {
  name: 'RedEnvelopeTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RedEnvelopeTwoToneSvg } },
      children
    ),
};
