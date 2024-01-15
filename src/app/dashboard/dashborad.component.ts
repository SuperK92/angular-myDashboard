import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';


@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './dashborad.component.html',
  styles: ``
})
export default class DashboradComponent {

}
