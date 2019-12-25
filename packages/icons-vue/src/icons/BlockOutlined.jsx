// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/BlockOutlined';

export default {
  name: 'IconBlockOutlined',
  displayName: 'BlockOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BlockOutlinedSvg } },
      children,
    ),
};