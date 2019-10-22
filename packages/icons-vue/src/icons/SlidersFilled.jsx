
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlidersFillSvg from '@ant-design/icons-svg/lib/fill/SlidersFill';

export default {
  name: 'SlidersFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlidersFillSvg } },
      children
    ),
};
