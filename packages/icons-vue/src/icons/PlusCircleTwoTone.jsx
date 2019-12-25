// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusCircleTwoTone';

export default {
  name: 'IconPlusCircleTwoTone',
  displayName: 'PlusCircleTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlusCircleTwoToneSvg } },
      children,
    ),
};