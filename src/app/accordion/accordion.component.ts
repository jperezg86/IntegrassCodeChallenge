import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() title : string
  @Input() expanded: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleBody() {
    this.expanded = !this.expanded;
  }

}
