// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled';

export default {
  name: 'IconBulbFilled',
  displayName: 'BulbFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BulbFilledSvg } },
      children,
    ),
};