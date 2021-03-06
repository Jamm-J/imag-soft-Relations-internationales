import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorSideComponent } from './administrator-side.component';

describe('ErrorComponent', () => {
    let component: AdministratorSideComponent;
    let fixture: ComponentFixture<AdministratorSideComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdministratorSideComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdministratorSideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
