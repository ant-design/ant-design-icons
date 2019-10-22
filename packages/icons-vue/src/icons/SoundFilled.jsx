
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SoundFillSvg from '@ant-design/icons-svg/lib/fill/SoundFill';

export default {
  name: 'SoundFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SoundFillSvg } },
      children
    ),
};
