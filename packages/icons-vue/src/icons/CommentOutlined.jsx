// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CommentOutlinedSvg from '@ant-design/icons-svg/lib/asn/CommentOutlined';

export default {
  name: 'IconCommentOutlined',
  displayName: 'CommentOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CommentOutlinedSvg } },
      children,
    ),
};