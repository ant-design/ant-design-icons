// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BookFilledSvg from '@ant-design/icons-svg/lib/asn/BookFilled';

export default {
  name: 'IconBookFilled',
  displayName: 'BookFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BookFilledSvg } },
      children,
    ),
};