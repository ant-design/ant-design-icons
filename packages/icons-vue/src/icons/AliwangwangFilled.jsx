// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AliwangwangFilledSvg from '@ant-design/icons-svg/lib/asn/AliwangwangFilled';

export default {
  name: 'IconAliwangwangFilled',
  displayName: 'AliwangwangFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AliwangwangFilledSvg } },
      children,
    ),
};