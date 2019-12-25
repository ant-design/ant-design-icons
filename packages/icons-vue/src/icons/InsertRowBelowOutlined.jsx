// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InsertRowBelowOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowBelowOutlined';

export default {
  name: 'IconInsertRowBelowOutlined',
  displayName: 'InsertRowBelowOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InsertRowBelowOutlinedSvg } },
      children,
    ),
};