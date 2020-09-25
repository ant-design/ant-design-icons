import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { fakeAsync, flush, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AccountBookFill, AccountBookOutline, AccountBookTwoTone } from '../icons/public_api';
import { IconDirective } from './icon.directive';
import { IconModule } from './icon.module';
import { IconService } from './icon.service';

const staticImportIcons = [
  AccountBookFill, AccountBookOutline, AccountBookTwoTone
];

const pandaLiteral = `<svg viewBox="0 0 1024 1024">
<path d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z" fill="#6B676E" p-id="1143" />
<path d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z" fill="#FFEBD2" p-id="1144" />
<path d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z" fill="#E9D7C3" p-id="1145" />
<path d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z" fill="#FFFFFF" p-id="1146" />
<path d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z" fill="#6B676E" p-id="1147" />
<path d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z" fill="#464655" p-id="1148" />
<path d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1149" />
<path d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1150" />
</svg>`;

describe('@ant-design/icons-angular', () => {
  let iconService: IconService;
  let testComponent;
  let fixture;
  let icons;

  describe('static loading', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports     : [ IconModule ],
        declarations: [ IconTestComponent ]
      });
    });

    beforeEach(inject([ IconService ], (is: IconService) => {
      iconService = is;
      iconService.addIcon(...staticImportIcons);
      iconService.twoToneColor = { primaryColor: '#1890ff' };
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(IconTestComponent);
      testComponent = fixture.debugElement.componentInstance;
      icons = fixture.debugElement.queryAll(By.directive(IconDirective));
    });

    afterEach(() => {
      iconService.clear();
    });

    it('should render SVG elements with attributes set', fakeAsync(() => {
      fixture.detectChanges();
      flush();
      fixture.detectChanges();

      const iconElement = icons[ 0 ].nativeElement;
      const svgElement = iconElement.firstElementChild;
      expect(svgElement.tagName).toBe('svg');
      expect(svgElement.getAttribute('viewBox')).toBe('64 64 896 896');
      expect(svgElement.getAttribute('fill')).toBe('currentColor');
      expect(svgElement.getAttribute('width')).toBe('1em');
      expect(svgElement.getAttribute('height')).toBe('1em');
    }));

    it('should render twotone icons', fakeAsync(() => {
      testComponent.theme = 'twotone';

      fixture.detectChanges();
      flush();
      fixture.detectChanges();

      const iconElement = icons[ 0 ].nativeElement as HTMLElement;
      const svgElement = iconElement.firstElementChild;
      expect(svgElement.children[ 0 ].getAttribute('fill')).toBe('#e6f7ff');
      expect(svgElement.children[ 1 ].getAttribute('fill')).toBe('#1890ff');
      expect(svgElement.children[ 2 ].getAttribute('fill')).toBe('#1890ff');
    }));

    it('should remove all when type if falsy', fakeAsync(() => {
      fixture.detectChanges();
      flush();
      fixture.detectChanges();

      const iconElement = icons[ 0 ].nativeElement as HTMLElement;
      expect(iconElement.firstElementChild.tagName).toBe('svg');

      testComponent.type = '';

      fixture.detectChanges();
      flush();
      fixture.detectChanges();

      expect(iconElement.firstElementChild).toBe(null);
    }));

    it('should ignore theme when it\' specified in type', fakeAsync(() => {
      testComponent.type = 'account-book-twotone';
      testComponent.theme = 'fill';

      fixture.detectChanges();
      flush();
      fixture.detectChanges();

      const iconElement = icons[ 0 ].nativeElement as HTMLElement;
      const svgElement = iconElement.firstElementChild;
      expect(svgElement.children[ 0 ].getAttribute('fill')).toBe('#e6f7ff');
      expect(svgElement.children[ 1 ].getAttribute('fill')).toBe('#1890ff');
      expect(svgElement.children[ 2 ].getAttribute('fill')).toBe('#1890ff');
    }));

    it('should support namespace', fakeAsync(() => {
      iconService.addIconLiteral('animal:panda', pandaLiteral);

      testComponent.type = 'animal:panda';

      fixture.detectChanges();
      flush();
      fixture.detectChanges();

      const iconElement = icons[ 0 ].nativeElement as HTMLElement;
      expect(iconElement.firstElementChild.tagName).toBe('svg');
    }));

    it('addIconLiteral should require a namespace', () => {
      expect(() => {
        iconService.addIconLiteral('no-name-space', 'whatever');
      }).toThrowError();
    });
  });

  describe('dynamic loading', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports     : [ IconModule, HttpClientModule ],
        declarations: [ IconTestComponent ]
      });
    });

    beforeEach(inject([ IconService ], (is: IconService) => {
      iconService = is;
      iconService.twoToneColor = { primaryColor: '#1890ff' };
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(IconTestComponent);
      testComponent = fixture.debugElement.componentInstance;
      icons = fixture.debugElement.queryAll(By.directive(IconDirective));
    });

    it('should fire http request if icon is not statically imported', (done) => {
      fixture.detectChanges();

      setTimeout(() => {
        fixture.detectChanges();

        const iconElement = icons[ 0 ].nativeElement;
        const svgElement = iconElement.firstElementChild;
        expect(svgElement.tagName).toBe('svg');
        expect(svgElement.getAttribute('viewBox')).toBe('64 64 896 896');
        expect(svgElement.getAttribute('fill')).toBe('currentColor');
        expect(svgElement.getAttribute('width')).toBe('1em');
        expect(svgElement.getAttribute('height')).toBe('1em');
        done();
      }, 50);
    });

    /**
     * This is untestable!
     */
    xit('should report icon missing when dynamic importing fails', async () => {
    });

    it('should support namespace',  (done) => {
      testComponent.type = 'animal:panda';
      fixture.detectChanges();

      setTimeout(() => {
        fixture.detectChanges();

        const iconElement = icons[ 0 ].nativeElement;
        const svgElement = iconElement.firstElementChild;
        expect(svgElement.tagName).toBe('svg');
        done();
      }, 50);
    });
  });
});

@Component({
  selector: 'icon-test',
  template: `
      <i antIcon [type]="type" [theme]="theme"></i>
  `
})
export class IconTestComponent {
  type = 'account-book';
  theme = 'fill';
}
