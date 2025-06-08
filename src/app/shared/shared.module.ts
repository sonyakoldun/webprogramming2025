import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ErrorMessageComponent } from "./components/error-message/error-message.component"
import { LoadingSpinnerComponent } from "./components/loading-spinner/loading-spinner.component"

@NgModule({
  declarations: [],
  imports: [CommonModule,ErrorMessageComponent, LoadingSpinnerComponent],
  exports: [ErrorMessageComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
