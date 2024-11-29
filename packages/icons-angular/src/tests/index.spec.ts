import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IconDirective, ThemeType } from '@ant-design/icons-angular';
import { DownSquareFill, DownSquareOutline, DownSquareTwoTone } from '@ant-design/icons-angular/icons';
import { PandaIcon } from './panda';
import { provideAntIcons } from '../component/icon.provider';

const DOWN_SQUARE_FILL_ICON = '<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM696.5 412.7l-178 246a7.95 7.95 0 01-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7H381c10.2 0 19.9 4.9 25.9 13.2L512 558.6l105.2-145.4c6-8.3 15.6-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>'
const DOWN_SQUARE_OUTLINE_ICON = '<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"><path d="M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6 406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>';
const DOWN_SQUARE_TWOTONE_ICON = '<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="1em" height="1em"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" fill="#eb2f96"></path><path d="M184 840h656V184H184v656zm150-440h46.9c10.3 0 19.9 4.9 25.9 13.2L512 558.6l105.2-145.4c6-8.3 15.7-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.4 12.7l-178 246a7.95 7.95 0 01-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7z" fill="#fff0f6"></path><path d="M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 558.6 406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z" fill="#eb2f96"></path></svg>';

describe('icons-angular', () => {
  describe('basics', () => {
    let testComponent: TestIconComponent;
    let fixture: ComponentFixture<TestIconComponent>;
    let icon: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [provideAntIcons([DownSquareFill, DownSquareOutline, DownSquareTwoTone])]
      });
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TestIconComponent);
      testComponent = fixture.componentInstance;
      icon = fixture.debugElement.query(By.directive(IconDirective));
    });

    it('should render registered icons', () => {
      fixture.detectChanges();
      expect(icon.nativeElement.innerHTML).toBe(DOWN_SQUARE_OUTLINE_ICON);
    });

    it('should support change icon theme', () => {
      testComponent.theme = 'fill';
      fixture.detectChanges();
      expect(icon.nativeElement.innerHTML).toBe(DOWN_SQUARE_FILL_ICON);
    })

    it('should support twotone color theme', () => {
      testComponent.theme = 'twotone';
      testComponent.twotoneColor = '#eb2f96';
      fixture.detectChanges();
      expect(icon.nativeElement.innerHTML).toBe(DOWN_SQUARE_TWOTONE_ICON);
    })
  });

  describe('namespace', () => {
    let testComponent: TestIconNamespaceComponent;
    let fixture: ComponentFixture<TestIconNamespaceComponent>;
    let icon: DebugElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [provideAntIcons([PandaIcon])]
      });
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(TestIconNamespaceComponent);
      testComponent = fixture.componentInstance;
      icon = fixture.debugElement.query(By.directive(IconDirective));
    });

    it('should render custom icon', () => {
      fixture.detectChanges();
      expect(icon.nativeElement.innerHTML).toBeTruthy();
    });
  });
});

@Component({
  imports: [IconDirective],
  template: `<span antIcon [type]="name" [theme]="theme" [twoToneColor]="twotoneColor"></span>`
})
export class TestIconComponent {
  public name = 'down-square';
  public theme: ThemeType | string = '';
  public twotoneColor = '';
}

@Component({
  imports: [IconDirective],
  template: `<span antIcon [type]="'animal:panda'"></span>`
})
export class TestIconNamespaceComponent {}
