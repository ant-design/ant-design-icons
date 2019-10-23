
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CarTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CarTwoTone';

export default {
  name: 'IconCarTwoTone',
  displayName: 'CarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarTwoToneSvg } },
      children
    ),
};
