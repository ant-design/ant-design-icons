import * as icons from '@ant-design/icons/lib/dist';
import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import AntdIcon from '../src';

AntdIcon.add(...Object.keys(icons).map((key) => (icons as any)[key]));

type Category = 'direction' | 'suggestion' | 'logo' | 'other';

const Container = styled.ul`
  margin: 40px 0;
  list-style: none;
  overflow: hidden;
`;

const ContainerItem = styled.li`
  float: left;
  width: 16.66%;
  text-align: center;
  list-style: none;
  height: 100px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  position: relative;
  margin: 3px 0;
  border-radius: 4px;
  overflow: hidden;
  padding: 10px 0 0;
`;

const Title = styled.h1`
  text-align: center;
`;

export default class IconSet extends React.Component {
  icons = {
    direction: [
      'step-backward',
      'step-forward',
      'fast-backward',
      'fast-forward',
      'shrink',
      'arrows-alt',
      'down',
      'up',
      'left',
      'right',
      'caret-up',
      'caret-down',
      'caret-left',
      'caret-right',
      'up-circle',
      'down-circle',
      'left-circle',
      'right-circle',
      'up-circle-o',
      'down-circle-o',
      'right-circle-o',
      'left-circle-o',
      'double-right',
      'double-left',
      'vertical-left',
      'vertical-right',
      'forward',
      'backward',
      'rollback',
      'enter',
      'retweet',
      'swap',
      'swap-left',
      'swap-right',
      'arrow-up',
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'play-circle',
      'play-circle-o',
      'up-square',
      'down-square',
      'left-square',
      'right-square',
      'up-square-o',
      'down-square-o',
      'left-square-o',
      'right-square-o',
      'login',
      'logout',
      'menu-fold',
      'menu-unfold'
    ],
    suggestion: [
      'question',
      'question-circle-o',
      'question-circle',
      'plus',
      'plus-circle-o',
      'plus-circle',
      'pause',
      'pause-circle-o',
      'pause-circle',
      'minus',
      'minus-circle-o',
      'minus-circle',
      'plus-square',
      'plus-square-o',
      'minus-square',
      'minus-square-o',
      'info',
      'info-circle-o',
      'info-circle',
      'exclamation',
      'exclamation-circle-o',
      'exclamation-circle',
      'close',
      'close-circle',
      'close-circle-o',
      'close-square',
      'close-square-o',
      'check',
      'check-circle',
      'check-circle-o',
      'check-square',
      'check-square-o',
      'clock-circle-o',
      'clock-circle',
      'warning'
    ],
    logo: [
      'android',
      'android-o',
      'apple',
      'apple-o',
      'windows',
      'windows-o',
      'ie',
      'chrome',
      'github',
      'aliwangwang',
      'aliwangwang-o',
      'dingding',
      'dingding-o',
      'weibo-square',
      'weibo-circle',
      'taobao-circle',
      'html5',
      'weibo',
      'twitter',
      'wechat',
      'youtube',
      'alipay-circle',
      'taobao',
      'skype',
      'qq',
      'medium-workmark',
      'gitlab',
      'medium',
      'linkedin',
      'google-plus',
      'dropbox',
      'facebook',
      'codepen',
      'amazon',
      'google',
      'codepen-circle',
      'alipay',
      'ant-design',
      'aliyun',
      'zhihu',
      'slack',
      'slack-square',
      'behance',
      'behance-square',
      'dribbble',
      'dribbble-square',
      'instagram',
      'yuque'
    ],
    other: [
      'lock',
      'unlock',
      'area-chart',
      'pie-chart',
      'bar-chart',
      'dot-chart',
      'bars',
      'book',
      'calendar',
      'cloud',
      'cloud-download',
      'code',
      'code-o',
      'copy',
      'credit-card',
      'delete',
      'desktop',
      'download',
      'edit',
      'ellipsis',
      'file',
      'file-text',
      'file-unknown',
      'file-pdf',
      'file-word',
      'file-excel',
      'file-jpg',
      'file-ppt',
      'file-markdown',
      'file-add',
      'folder',
      'folder-open',
      'folder-add',
      'hdd',
      'frown',
      'frown-o',
      'meh',
      'meh-o',
      'smile',
      'smile-o',
      'inbox',
      'laptop',
      'appstore-o',
      'appstore',
      'line-chart',
      'link',
      'mail',
      'mobile',
      'more',
      'notification',
      'paper-clip',
      'picture',
      'poweroff',
      'reload',
      'search',
      'setting',
      'share-alt',
      'shopping-cart',
      'tablet',
      'tag',
      'tag-o',
      'tags',
      'tags-o',
      'to-top',
      'upload',
      'user',
      'video-camera',
      'home',
      'loading',
      'loading-3-quarters',
      'cloud-upload-o',
      'cloud-download-o',
      'cloud-upload',
      'cloud-o',
      'star-o',
      'star',
      'heart-o',
      'heart',
      'environment',
      'environment-o',
      'eye',
      'eye-o',
      'camera',
      'camera-o',
      'save',
      'team',
      'solution',
      'phone',
      'filter',
      'exception',
      'export',
      'customer-service',
      'qrcode',
      'scan',
      'like',
      'like-o',
      'dislike',
      'dislike-o',
      'message',
      'pay-circle',
      'pay-circle-o',
      'calculator',
      'pushpin',
      'pushpin-o',
      'bulb',
      'select',
      'switcher',
      'rocket',
      'bell',
      'disconnect',
      'database',
      'compass',
      'barcode',
      'hourglass',
      'key',
      'flag',
      'layout',
      'printer',
      'sound',
      'usb',
      'skin',
      'tool',
      'sync',
      'wifi',
      'car',
      'schedule',
      'user-add',
      'user-delete',
      'usergroup-add',
      'usergroup-delete',
      'man',
      'woman',
      'shop',
      'gift',
      'idcard',
      'medicine-box',
      'red-envelope',
      'coffee',
      'copyright',
      'trademark',
      'safety',
      'wallet',
      'bank',
      'trophy',
      'contacts',
      'global',
      'shake',
      'api',
      'fork',
      'dashboard',
      'form',
      'table',
      'profile'
    ]
  };

  renderIcons(catigory: Category) {
    return this.icons[catigory].map((type) => (
      <ContainerItem key={type}>
        <AntdIcon
          style={{ fontSize: '24px' }}
          type={type.replace(/-o$/, '').replace(/$/, '-o')}
        />
        <p>{type}</p>
      </ContainerItem>
    ));
  }

  render() {
    return (
      <div style={{ color: '#555' }}>
        <Title>Direction</Title>
        <Container>{this.renderIcons('direction')}</Container>
        <Title>Suggestion</Title>
        <Container>{this.renderIcons('suggestion')}</Container>
        <Title>Other</Title>
        <Container>{this.renderIcons('other')}</Container>
        <Title>Logo</Title>
        <Container>{this.renderIcons('logo')}</Container>
      </div>
    );
  }
}

render(<IconSet />, document.getElementById('__react-content'));
