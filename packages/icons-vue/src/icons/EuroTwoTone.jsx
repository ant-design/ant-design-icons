
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EuroTwoToneSvg from '@ant-design/icons-svg/lib/twotone/EuroTwoTone';

export default {
  name: 'IconEuroTwoTone',
  displayName: 'EuroTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EuroTwoToneSvg } },
      children
    ),
};
