// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BookTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookTwoTone';

export default {
  name: 'IconBookTwoTone',
  displayName: 'BookTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BookTwoToneSvg } },
      children,
    ),
};