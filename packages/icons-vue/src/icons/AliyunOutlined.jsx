// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AliyunOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliyunOutlined';

export default {
  name: 'IconAliyunOutlined',
  displayName: 'AliyunOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AliyunOutlinedSvg } },
      children,
    ),
};