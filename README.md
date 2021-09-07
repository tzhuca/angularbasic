
Key Points:

Step 1: Importing FormsModule
import {FormsModule} from '@angular/forms'

Step 2: Add it to imports array of your AppModule as
imports :[ ... , FormsModule ]

Step 3: Change ng-model as ngModel with banana boxes as

 <input  type="text" [(ngModel)]="value" />
