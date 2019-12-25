// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BookOutlinedSvg from '@ant-design/icons-svg/lib/asn/BookOutlined';

export default {
  name: 'IconBookOutlined',
  displayName: 'BookOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BookOutlinedSvg } },
      children,
    ),
};