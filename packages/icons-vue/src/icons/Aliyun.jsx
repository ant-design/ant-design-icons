
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AliyunOutlineSvg from '@ant-design/icons-svg/lib/outline/AliyunOutline';

export default {
  name: 'IconAliyun',
  displayName: 'Aliyun',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AliyunOutlineSvg } },
      children
    ),
};
