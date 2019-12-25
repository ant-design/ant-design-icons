// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EditTwoToneSvg from '@ant-design/icons-svg/lib/asn/EditTwoTone';

export default {
  name: 'IconEditTwoTone',
  displayName: 'EditTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EditTwoToneSvg } },
      children,
    ),
};