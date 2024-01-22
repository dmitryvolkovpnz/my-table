import { CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component} from "@angular/core";
import { FormsModule }   from "@angular/forms";

//Обьявление модели данных
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
    //Заполнение первой записи на странице
    items: Item[] =
    [
        { name:"21.01.2023", description: "Моя первая запись"},
    ];
    //Функция добавления новой записи в дневнике
    addItem(name: string , description: string): void {

        if(name==null || description.trim()=="")
            return;
        this.items.push(new Item(name, description));
    }
    //функция удаления записи из дневника
    remove(index: number): void {
      this.items.splice(index, 1);
    }
    //функция открытия модельного окна с формой
    openModal() {
      const modelDiv = document.getElementById('myModal');
      if (modelDiv != null){
        modelDiv.style.display = 'block';
      }
    }
    //функция закрытия модального окна с формой
    closeModal() {
      const modelDiv = document.getElementById('myModal');
      if (modelDiv != null){
        modelDiv.style.display = 'none';
      }
    }
}
