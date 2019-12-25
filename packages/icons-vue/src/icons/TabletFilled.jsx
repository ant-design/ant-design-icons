// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled';

export default {
  name: 'IconTabletFilled',
  displayName: 'TabletFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TabletFilledSvg } },
      children,
    ),
};