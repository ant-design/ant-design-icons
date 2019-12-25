// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IeCircleFilledSvg from '@ant-design/icons-svg/lib/asn/IeCircleFilled';

export default {
  name: 'IconIeCircleFilled',
  displayName: 'IeCircleFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: IeCircleFilledSvg } },
      children,
    ),
};