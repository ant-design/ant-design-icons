// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DiffFilledSvg from '@ant-design/icons-svg/lib/asn/DiffFilled';

export default {
  name: 'IconDiffFilled',
  displayName: 'DiffFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DiffFilledSvg } },
      children,
    ),
};