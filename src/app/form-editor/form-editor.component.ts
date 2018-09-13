import { Component, OnInit } from '@angular/core';
import {IForm, IFormOption, IFormQuestion, IFormQuestionData} from '../../my_classes/dataTypes';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {

  formData: IForm;                  // Data of currently editing form
  questionData: IFormQuestion;      // Data of currently editing question
  optionData: IFormOption;          // Data of currently editing option

  questions: IFormQuestionData[];   // All questions with their options
  options: IFormOption[];           // All options of currently editing question

  questionEditorEnabled: boolean;
  optionEditorEnabled : boolean;

  constructor() {
    this.formData = new IForm();
    this.questionData = new IFormQuestion();
    this.optionData = new IFormOption();

    this.questions = [];
    this.options = [];

    this.questionEditorEnabled = false;
    this.optionEditorEnabled  = false;
  }

  ngOnInit(): void {}

  /**
   * Method is invoked when clicked button 'Add question' in form editor.
   * If question fields are not empty, new question is created and added with all its
   * options to list of questions.
   */
  addQuestionFunction() {

    if (this.questionEditorEnabled) {
      if (this.questionData.text_value !== '') {
        let q: IFormQuestion = new IFormQuestion();

        let data = { question: q, options: this.options };
        Object.assign(data.question, this.questionData);    //deep copy
        data.question.sequence_number = this.questions.length;
        this.questions.push(data);
      }

      // Close question editor
      this.questionEditorEnabled = false;
    }
    else {
      // Reset values
      this.questionData = new IFormQuestion();
      this.optionData = new IFormOption();
      this.questionData.sequence_number = this.questions.length;
      this.options = [];

      // Enable question editor
      this.questionEditorEnabled = true;
    }

    console.log(this);
  }


  addOptionFunction() {

    if (this.optionData.option_value !== '') {
      this.optionEditorEnabled = !this.optionEditorEnabled;
    }

    console.log(this);
  }


  /**
   * Removes question from current list of created questions
   * @param {number} sequence_number
   */
  deleteQuestion(sequence_number: number): void {
    if (this.questions.length > 0 && sequence_number < this.questions.length) {
      this.questions.splice(sequence_number, 1);

      // Adjust sequence numbers
      let i = 0;
      for (let item of this.questions) {
        item.question.sequence_number = i;
        i++;
      }
    }
  }


  /**
   * Opens question editor with particular question
   * @param {number} sequence_number
   */
  editQuestion(sequence_number: number): void {
    if (this.questions.length > 0 && sequence_number < this.questions.length) {
      this.questionEditorEnabled = true;
      Object.assign(this.questionData, this.questions[sequence_number].question); // Deep copy
    }
  }

  deleteOption(sequence_number: number): void {}

  editOption(sequence_number: number): void {}
}
