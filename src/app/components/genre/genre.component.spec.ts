import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MoviesService } from 'src/app/service/movies.service';
import { GenreComponent } from "./genre.component";

describe("GenreComponent", () => {
  let component: GenreComponent;
  let fixture: ComponentFixture<GenreComponent>;
  let myService: MoviesService;
  ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenreComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: MoviesService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.get(MoviesService);
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy();
    });
  });
})