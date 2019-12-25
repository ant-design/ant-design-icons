// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import InboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/InboxOutlined';

export default {
  name: 'IconInboxOutlined',
  displayName: 'InboxOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InboxOutlinedSvg } },
      children,
    ),
};