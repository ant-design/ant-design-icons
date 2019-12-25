// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IeSquareFilledSvg from '@ant-design/icons-svg/lib/asn/IeSquareFilled';

export default {
  name: 'IconIeSquareFilled',
  displayName: 'IeSquareFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: IeSquareFilledSvg } },
      children,
    ),
};