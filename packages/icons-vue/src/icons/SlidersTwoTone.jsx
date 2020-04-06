// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlidersTwoToneSvg from '@ant-design/icons-svg/lib/asn/SlidersTwoTone';

export default {
  name: 'IconSlidersTwoTone',
  displayName: 'SlidersTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SlidersTwoToneSvg } },
      children,
    ),
};