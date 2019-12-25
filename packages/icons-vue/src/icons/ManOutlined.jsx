// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ManOutlinedSvg from '@ant-design/icons-svg/lib/asn/ManOutlined';

export default {
  name: 'IconManOutlined',
  displayName: 'ManOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ManOutlinedSvg } },
      children,
    ),
};