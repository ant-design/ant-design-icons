
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloseSquareTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CloseSquareTwoTone';

export default {
  name: 'CloseSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseSquareTwoToneSvg } },
      children
    ),
};
