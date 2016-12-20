import { Component, OnInit } from '@angular/core';
import { CollectableService } from "../shared/collectable.service";
import { Collectable } from "../shared/collectable.model";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
  collectedItems: Collectable[]= [];

  onRemoveToCollection(item: Collectable){
    this.collectableService.removeToCollection(item);
  }

  constructor(private collectableService: CollectableService) { 
    
  }

  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }

}
