import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() type: string = '';
  @Output() sendDraft: EventEmitter<any> = new EventEmitter<any>();
  questionArray: boolean[] = [];
  myForm: FormGroup = this.formBuilder.group({
    text: [null, Validators.required],
    difficulty: [null, Validators.required],
    choice1: [null, Validators.required],
    choice2: [null, Validators.required],
    choice3: [null],
    choice4: [null],
    correct1: [null],
    correct2: [null],
    correct3: [null],
    correct4: [null],
    type: [null]
  });

  giveCheck(event: any, i: number) {
    if (this.type != "Multiple choice") {
      this.myForm.get('correct1')?.setValue(false);
      this.myForm.get('correct1')?.setValue(false);
    }
    this.myForm.get('correct' + i)?.setValue(event.target.checked);
  }

  constructor(private toast: HotToastService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addQuestion() {
    if (this.questionArray.length < 4) {
      this.questionArray.push(true);
    }
    else {
      this.toast.error(`You can only add ${this.questionArray.length} choices`, {
        position: 'bottom-right',
      });
    }
  }

  convertNumberToWord(num: number): string {
    const words = ['one', 'two', 'three', 'four',];
    return words[num];
  }

  cancel() {
    this.questionArray.splice(0, this.questionArray.length);
    this.myForm.reset();
  }

  draft(myForm: FormGroup) {
    this.myForm.get('type')?.setValue(this.type);
    if (this.validation(myForm)) {
      this.sendDraft.emit(myForm.value);
      this.cancel();
    }
  }

  validation(myForm: FormGroup): boolean {
    let isValid = true;
    for (const controlName in myForm.controls) {
      if (myForm.get(controlName)?.hasError('required')) {
        this.toast.error(`${controlName} is required`, {
          position: 'bottom-right',
        });
        isValid = false;
      }
    }
    const corrects = ['correct1', 'correct2', 'correct3', 'correct4'];
    if (corrects.every(control => myForm.get(control)?.value != true)) {
      this.toast.error('select the correct answer', {
        position: 'bottom-right',
      });
      isValid = false;
    }

    return isValid;
  }

}
