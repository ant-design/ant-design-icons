// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PhoneFilledSvg from '@ant-design/icons-svg/lib/asn/PhoneFilled';

export default {
  name: 'IconPhoneFilled',
  displayName: 'PhoneFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PhoneFilledSvg } },
      children,
    ),
};