// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HomeFilledSvg from '@ant-design/icons-svg/lib/asn/HomeFilled';

export default {
  name: 'IconHomeFilled',
  displayName: 'HomeFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HomeFilledSvg } },
      children,
    ),
};