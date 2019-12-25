// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YuqueFilledSvg from '@ant-design/icons-svg/lib/asn/YuqueFilled';

export default {
  name: 'IconYuqueFilled',
  displayName: 'YuqueFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: YuqueFilledSvg } },
      children,
    ),
};