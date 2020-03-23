// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DeleteTwoToneSvg from '@ant-design/icons-svg/lib/asn/DeleteTwoTone';

export default {
  name: 'IconDeleteTwoTone',
  displayName: 'DeleteTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DeleteTwoToneSvg } },
      children,
    ),
};