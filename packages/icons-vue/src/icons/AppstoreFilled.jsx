// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled';

export default {
  name: 'IconAppstoreFilled',
  displayName: 'AppstoreFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AppstoreFilledSvg } },
      children,
    ),
};