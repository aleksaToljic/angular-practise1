import {Component} from "@angular/core";
import {DataStorageService} from "../shared/data-storage.service";
import {Response} from "@angular/http";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService) {
    }

    onSave() {
        this.dataStorageService.onSaveData().subscribe(
            (response: Response) => {
                console.log(response)
            }
        )
    }

    onFetchData() {
        this.dataStorageService.onFetchData();
    }

}

