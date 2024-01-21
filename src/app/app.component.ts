import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component} from "@angular/core";
import { FormsModule }   from "@angular/forms";


class Item{
  name: string;
  description: string;

  constructor(name: string, description: string) {
      this.name = name;
      this.description = description;
  }
}

@Component({
    selector: "app-root",
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    name: string = "";
    description: string = "";

    items: Item[] =
    [
        { name:"21.01.2023", description: "Моя первая запись"},
    ];

    addItem(name: string , description: string): void {

        if(name==null || description.trim()=="")
            return;
        this.items.push(new Item(name, description));
    }

    remove(index: number): void {
      this.items.splice(index, 1);
    }

    openModal() {
      const modelDiv = document.getElementById('myModal');
      if (modelDiv != null){
        modelDiv.style.display = 'block';
      }
    }
    closeModal() {
      const modelDiv = document.getElementById('myModal');
      if (modelDiv != null){
        modelDiv.style.display = 'none';
      }
    }

}
