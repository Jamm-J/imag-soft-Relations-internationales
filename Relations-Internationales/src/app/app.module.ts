import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule,
    MatPaginatorModule, MatIconModule, MatListModule, MatDialogModule, MatSelectModule, MatCheckboxModule, MatSlideToggleModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { DatabaseService } from './services/database/database.service';

import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { SimulatorService } from './services/simulator/simulator.service';
import { AdministratorSideComponent } from './pages/administrator-side/administrator-side.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { AddCourseDialogComponent } from './components/add-element-dialog/add-course-dialog/add-course-dialog.component';
import { FormsModule } from '@angular/forms';
import { AddContactDialogComponent } from './components/add-element-dialog/add-contact-dialog/add-contact-dialog.component';
import { AddDailyTopicDialogComponent } from './components/add-element-dialog/add-daily-topic-dialog/add-daily-topic-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { DatePipe } from '@angular/common';
import { AddStudentDialogComponent } from './components/add-element-dialog/add-student-dialog/add-student-dialog.component';
import { AddCourseModalComponent } from './pages/add-course-modal/add-course-modal.component';
import { CourseDetailModalComponent } from './pages/course-detail-modal/course-detail-modal.component';
import { AddContactModalComponent } from './pages/add-contact-modal/add-contact-modal.component';
import { AddPrivateLifeModalComponent } from './pages/add-private-life-modal/add-private-life-modal.component';
<<<<<<< HEAD
import { SondageModalComponent } from './pages/sondage-modal/sondage-modal.component';
=======
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { AddPollDialogComponent } from './components/add-element-dialog/add-poll-dialog/add-poll-dialog.component';
import { SendEmailDialogComponent } from './components/send-email-dialog/send-email-dialog.component';
import { StudentsResolver } from './resolvers/students.resolver';
import { HttpClientModule } from '@angular/common/http';
import { StudentResolver } from './resolvers/student.resolver';
import { CoursesResolver } from './resolvers/courses.resolver';
import { ContactsResolver } from './resolvers/contacts.resolver';
import { DailyTopicsResolver } from './resolvers/dailyTopics.resolver';
>>>>>>> 87ad2e6933b8149614f0ba6b9321fda174b671d4

const appRoutes: Routes = [
    // default route
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    // localhost/4200/home
    {
        resolve: {
            studentsResolverResult: StudentsResolver,
        },
        path: 'home',
        component: HomeComponent,
    },
    // localhost/4200/login
    {
        path: 'login',
        component: LoginComponent
    },
    // localhost/4200/student-profile-page
    {
        path: 'student-profile-page',
        component: StudentProfilePageComponent
    },
    // localhost/4200/student-details/:idPerson
    {
        resolve: {
            studentResolverResult: StudentResolver,
            coursesResolverResult: CoursesResolver,
            contactsResolverResult: ContactsResolver,
            dailyTopicsResolverResult: DailyTopicsResolver,
        },
        path: 'student-details/:idPerson',
        component: StudentDetailsComponent
    },
    // localhost/4200/student-profile-page
    {
        path: 'CourseDetailModalComponent',
        component: CourseDetailModalComponent
    },
    // localhost/4200/error
    {
        path: '**',
        component: ErrorComponent
    },
];

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ErrorComponent,
        StudentProfilePageComponent,
        AdministratorSideComponent,
        HeaderComponent,
        StudentDetailsComponent,
        AddCourseDialogComponent,
        AddContactDialogComponent,
        AddDailyTopicDialogComponent,
        HeaderComponent,
        AddStudentDialogComponent,
        CourseDetailsComponent,
        AddPollDialogComponent,
        SendEmailDialogComponent,
        AddCourseModalComponent,
        CourseDetailModalComponent,
        AddContactModalComponent,
        AddPrivateLifeModalComponent,
        SondageModalComponent, 

    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        // Angular Material modules
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatTreeModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
        MatListModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        BrowserModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        DatabaseService,
        SimulatorService,
        DatePipe,
        StudentsResolver,
        StudentResolver,
        CoursesResolver,
        ContactsResolver,
        DailyTopicsResolver,
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        AddCourseDialogComponent,
        AddContactDialogComponent,
        AddDailyTopicDialogComponent,
        AddStudentDialogComponent,
        AddPollDialogComponent,
        SendEmailDialogComponent,
        AddPrivateLifeModalComponent,
        AddContactModalComponent,
        AddCourseModalComponent
    ],
})
export class AppModule { }
