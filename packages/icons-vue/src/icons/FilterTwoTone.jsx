// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterTwoTone';

export default {
  name: 'IconFilterTwoTone',
  displayName: 'FilterTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FilterTwoToneSvg } },
      children,
    ),
};