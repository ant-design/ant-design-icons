// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ReloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReloadOutlined';

export default {
  name: 'IconReloadOutlined',
  displayName: 'ReloadOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ReloadOutlinedSvg } },
      children,
    ),
};