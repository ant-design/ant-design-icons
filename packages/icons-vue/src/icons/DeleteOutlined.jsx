// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteOutlined';

export default {
  name: 'IconDeleteOutlined',
  displayName: 'DeleteOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DeleteOutlinedSvg } },
      children,
    ),
};