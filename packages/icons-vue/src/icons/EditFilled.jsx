// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EditFilledSvg from '@ant-design/icons-svg/lib/asn/EditFilled';

export default {
  name: 'IconEditFilled',
  displayName: 'EditFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EditFilledSvg } },
      children,
    ),
};