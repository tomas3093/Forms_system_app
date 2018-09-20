import { Component, OnInit } from '@angular/core';
import {IForm, IFormOption, IFormQuestion, IFormQuestionData} from '../../my_classes/dataTypes';

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
   * options to list of questions. If we are trying to add question with seq. number which
   * already exists, question will be updated.
   */
  addQuestionFunction() {

    if (this.questionEditorEnabled) {
      if (this.questionData.text_value !== '') {
        let q: IFormQuestion = new IFormQuestion();

        let data = { question: q, options: this.options };
        Object.assign(data.question, this.questionData);    //deep copy

        // Edit existing question
        if (data.question.sequence_number !== null && data.question.sequence_number < this.questions.length) {
           for (let item of this.questions) {
             if (item.question.sequence_number === data.question.sequence_number) {
               Object.assign(item, data);   // Assign data to question list
               break;
             }
           }
        }

        // Add new question to the end of the list
        else {
          data.question.sequence_number = this.questions.length;
          this.questions.push(data);
        }
      }

      // Close question editor
      this.questionEditorEnabled = false;
    }
    else {
      // Reset values
      this.questionData = new IFormQuestion();
      this.optionData = new IFormOption();
      this.options = [];

      // Enable question editor
      this.questionEditorEnabled = true;
    }
  }


  /**
   * Removes question from current list of created questions
   * @param {number} sequence_number - question number
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
   * Opens question editor with data of particular question
   * @param {number} sequence_number - question number
   */
  editQuestion(sequence_number: number): void {
    if (this.questions.length > 0 && sequence_number < this.questions.length) {
      this.questionEditorEnabled = true;
      Object.assign(this.questionData, this.questions[sequence_number].question); // Deep copy
      this.options = this.questions[sequence_number].options;
    }
  }


  /**
   * Moves particular question in the list by one position upwards
   * @param {number} sequence_number - question number
   */
  moveUpQuestion(sequence_number: number): void {

    if (this.questions.length > 1 && sequence_number < this.questions.length) {

      let sequence_number2: number;

      if (sequence_number === 0)
        sequence_number2 = this.questions.length - 1;
      else
        sequence_number2 = sequence_number - 1;

      // Swap items
      this.questions[sequence_number] = this.questions.splice(sequence_number2, 1, this.questions[sequence_number])[0];

      // Swap sequence numbers
      this.questions[sequence_number].question.sequence_number = sequence_number;
      this.questions[sequence_number2].question.sequence_number = sequence_number2;
    }
  }


  /**
   * Method is invoked when clicked button 'Add option' in form editor.
   * If question fields are not empty, new option is created and added to list of options
   * of that particular question. If we are trying to add option with seq. number which
   * already exists, option will be updated.
   */
  addOptionFunction() {

    if (this.optionEditorEnabled) {
      if (this.optionData.option_value !== '') {

        let option: IFormOption = new IFormOption();
        Object.assign(option, this.optionData);       //deep copy

        // Edit existing option
        if (option.sequence_number !== null && option.sequence_number < this.options.length) {
          for (let item of this.options) {
            if (item.sequence_number === option.sequence_number) {
              Object.assign(item, option);            // Assign data to option list
              break;
            }
          }
        }

        // Add new option to the end of the list
        else {
          option.sequence_number = this.options.length;
          this.options.push(option);
        }
      }

      // Close option editor
      this.optionEditorEnabled = false;
    }
    else {
      // Reset values
      this.optionData = new IFormOption();
      //this.options = [];

      // Enable option editor
      this.optionEditorEnabled = true;
    }
  }


  /**
   * Removes option from current list of created options
   * @param {number} sequence_number - option number
   */
  deleteOption(sequence_number: number): void {
    if (this.options.length > 0 && sequence_number < this.options.length) {
      this.options.splice(sequence_number, 1);

      // Adjust sequence numbers
      let i = 0;
      for (let item of this.options) {
        item.sequence_number = i;
        i++;
      }
    }
  }


  /**
   * Opens option editor with data of particular option
   * @param {number} sequence_number - option number
   */
  editOption(sequence_number: number): void {
    if (this.options.length > 0 && sequence_number < this.options.length) {
      this.optionEditorEnabled = true;
      Object.assign(this.optionData, this.options[sequence_number]);  // Deep copy
    }
  }


  /**
   * Moves particular option in the list by one position upwards
   * @param {number} sequence_number - option number
   */
  moveUpOption(sequence_number: number) : void {
    if (this.options.length > 1 && sequence_number < this.options.length) {

      let sequence_number2: number;

      if (sequence_number === 0)
        sequence_number2 = this.options.length - 1;
      else
        sequence_number2 = sequence_number - 1;

      // Swap items
      this.options[sequence_number] = this.options.splice(sequence_number2, 1, this.options[sequence_number])[0];

      // Swap sequence numbers
      this.options[sequence_number].sequence_number = sequence_number;
      this.options[sequence_number2].sequence_number = sequence_number2;
    }
  }
}
