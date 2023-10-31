import { Component, OnInit } from '@angular/core';
import { faCoffee,faGauge,faComment,faTrophy,faGlobe,faGear ,faRectangleList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  dashboard=faGauge;
message=faComment;
archivement=faTrophy;
e=faGlobe;
setting=faGear;
catelog=faRectangleList;

  constructor() { }

  ngOnInit(): void {
  }

}
