import { MemberRoutingModule } from './member-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';

import { MyBooksComponent } from './my-books/my-books.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyVideosComponent } from './my-videos/my-videos.component';
import { PortalsComponent } from './portals/portals.component';

import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { DonationGraphComponent } from './member-dashboard/components/donations-graph/donation-graph.component';
import { PieGraphComponent } from './member-dashboard/components/pie-graph/pie-graph.component';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { BarChart, PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, PieChart, CanvasRenderer]);

@NgModule({
  declarations: [
    MemberDashboardComponent,
    DonationGraphComponent,
    PieGraphComponent,
    MyBooksComponent,
    MyEventsComponent,
    MyVideosComponent,
    PortalsComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    AppMaterialModule,
    NgxEchartsModule.forRoot({echarts}),
  ]
})
export class MemberModule { }
