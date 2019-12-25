// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DatabaseFilledSvg from '@ant-design/icons-svg/lib/asn/DatabaseFilled';

export default {
  name: 'IconDatabaseFilled',
  displayName: 'DatabaseFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DatabaseFilledSvg } },
      children,
    ),
};