import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelComponent } from './marvel.component';

describe('MarvelComponent with TestBed', () => {
  let marvelComponent: MarvelComponent;
  beforeEach(()=> {
    marvelComponent = new MarvelComponent();
  });

  it('should create marvel component', () => {
    expect(marvelComponent).toBeTruthy();
  });

  it('shoud return name with prefix when get name', () => {
    expect(marvelComponent.getName('Mr.', 'Tony Stark')).toEqual('Mr.Tony Stark');
  });

  // it('shoud return IRON MAN of hero when getHeroName by Tony Stark', () => {
  //   expect(marvelComponent.getHeroName('Tony')).toEqual('IRON MAN');
  // });

  // it('shoud return IRON MAN of hero when getHeroName by Tony Stark', () => {
  //   expect(marvelComponent.getHeroName('Nat')).toEqual('BACK WIDOW');
  // });

});

//// ------------->

describe('MarvelComponent with TestBed', () => {
  let component: MarvelComponent;
  let fixture: ComponentFixture<MarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarvelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create marvel component', () => {
    expect(component).toBeTruthy();
  });

  it('shoud name with prefix when get name', () => {
    expect(component.getName('Mr.', 'Tony Stark')).toEqual('Mr.Tony Stark');
  });

  it(`should have as title 'app-marvel'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Welcome to Marvel studio');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Marvel studio !');
  }));

});
