// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled';

export default {
  name: 'IconFilterFilled',
  displayName: 'FilterFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FilterFilledSvg } },
      children,
    ),
};