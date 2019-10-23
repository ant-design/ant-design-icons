
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MehFillSvg from '@ant-design/icons-svg/lib/fill/MehFill';

export default {
  name: 'IconMehFilled',
  displayName: 'MehFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MehFillSvg } },
      children
    ),
};
