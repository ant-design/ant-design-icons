// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YoutubeOutlinedSvg from '@ant-design/icons-svg/lib/asn/YoutubeOutlined';

export default {
  name: 'IconYoutubeOutlined',
  displayName: 'YoutubeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: YoutubeOutlinedSvg } },
      children,
    ),
};