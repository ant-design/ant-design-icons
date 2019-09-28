import {
  iconShouldNotBeFocusable,
  iconsAfter3Dot9ShouldBeResizeViewbox
} from '../build/strategies';
import { AbstractNodeAndIconName } from '../plugins/icon-definition';

const AccountBookPathNode: AbstractNodeAndIconName = Object.freeze({
  abstractNode: {
    tag: 'path',
    attrs: {
      d: '{{ PATH_PLACEHOLDER }}'
    }
  },
  iconName: 'account-book'
});

const AccountBookSvgNode: AbstractNodeAndIconName = Object.freeze({
  abstractNode: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024' },
    children: [AccountBookPathNode.abstractNode]
  },
  iconName: 'account-book'
});

const Loading3QuartersSvgNode: AbstractNodeAndIconName = Object.freeze({
  abstractNode: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024' },
    children: []
  },
  iconName: 'loading-3-quarters'
});

describe('iconShouldNotBeFocusable', () => {
  it('should work with <svg>...</svg>, not with <path d="..."/>.', () => {
    expect(iconShouldNotBeFocusable(AccountBookPathNode)).toStrictEqual(
      AccountBookPathNode
    );
    expect(iconShouldNotBeFocusable(AccountBookSvgNode)).toStrictEqual({
      iconName: 'account-book',
      abstractNode: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
        children: [AccountBookPathNode.abstractNode]
      }
    });
  });
});

describe('iconsAfter3Dot9ShouldBeResizeViewbox', () => {
  it('should work with loading-3-quarters and other icon <= version antd@3.9', () => {
    expect(
      iconsAfter3Dot9ShouldBeResizeViewbox(Loading3QuartersSvgNode)
    ).toStrictEqual({
      iconName: 'loading-3-quarters',
      abstractNode: {
        tag: 'svg',
        attrs: { viewBox: '0 0 1024 1024' },
        children: []
      }
    });

    expect(
      iconsAfter3Dot9ShouldBeResizeViewbox(AccountBookSvgNode)
    ).toStrictEqual({
      iconName: 'account-book',
      abstractNode: {
        tag: 'svg',
        attrs: { viewBox: '64 64 896 896' },
        children: [AccountBookPathNode.abstractNode]
      }
    });
  });
});
