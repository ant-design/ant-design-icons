// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DropboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/DropboxOutlined';

export default {
  name: 'IconDropboxOutlined',
  displayName: 'DropboxOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DropboxOutlinedSvg } },
      children,
    ),
};