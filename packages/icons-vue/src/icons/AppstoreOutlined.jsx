// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AppstoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreOutlined';

export default {
  name: 'IconAppstoreOutlined',
  displayName: 'AppstoreOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AppstoreOutlinedSvg } },
      children,
    ),
};