
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlidersTwoToneSvg from '@ant-design/icons-svg/lib/twotone/SlidersTwoTone';

export default {
  name: 'SlidersTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlidersTwoToneSvg } },
      children
    ),
};
