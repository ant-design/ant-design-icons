// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AppstoreTwoToneSvg from '@ant-design/icons-svg/lib/asn/AppstoreTwoTone';

export default {
  name: 'IconAppstoreTwoTone',
  displayName: 'AppstoreTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AppstoreTwoToneSvg } },
      children,
    ),
};