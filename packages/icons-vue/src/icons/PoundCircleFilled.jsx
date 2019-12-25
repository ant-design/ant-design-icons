// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PoundCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PoundCircleFilled';

export default {
  name: 'IconPoundCircleFilled',
  displayName: 'PoundCircleFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PoundCircleFilledSvg } },
      children,
    ),
};