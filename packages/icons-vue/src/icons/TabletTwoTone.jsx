// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TabletTwoToneSvg from '@ant-design/icons-svg/lib/asn/TabletTwoTone';

export default {
  name: 'IconTabletTwoTone',
  displayName: 'TabletTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TabletTwoToneSvg } },
      children,
    ),
};