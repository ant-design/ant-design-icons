// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InsertRowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowRightOutlined';

export default {
  name: 'IconInsertRowRightOutlined',
  displayName: 'InsertRowRightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InsertRowRightOutlinedSvg } },
      children,
    ),
};