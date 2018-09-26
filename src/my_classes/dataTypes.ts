
/**
 * Database entity User
 */
export class IUser {
  user_id: number;
  username: string;
  password: string;
  email: string;
  registered: string;
  last_login: string;

  name: string;
  sex: string;
  country: string;
  birthdate: string;

  constructor() {
    this.user_id = null;
    this.username = '';
    this.password = '';
    this.email = '';
    this.registered = '';
    this.last_login = '';

    this.name = '';
    this.sex = '';
    this.country = '';
    this.birthdate = '';
  }
}


/**
 * Database entity Form
 */
export class IForm {
  form_id: number;
  user_id: number;
  name: string;
  created: string;

  constructor() {
    this.form_id = null;
    this.user_id = null;
    this.name = '';
    this.created = null;
  }}


/**
 * Database entity FormQuestion
 */
export class IFormQuestion {
  form_question_id: number;
  form_id: number;
  text_value: string;
  sequence_number: number;
  question_type_id: number;

  constructor() {
    this.form_question_id = null;
    this.form_id = null;
    this.text_value = '';
    this.sequence_number = null;
    this.question_type_id = null;
  }
}


/**
 * Database entity FormOption
 */
export class IFormOption {
  option_id: number;
  form_question_id: number;
  option_value: string;
  sequence_number: number;

  option_note: string;

  constructor() {
    this.option_id = null;
    this.form_question_id = null;
    this.option_value = '';
    this.sequence_number = null;

    this.option_note = '';
  }
}


/**
 * Database entity FormQuestionType
 */
export class IFormQuestionType {
  question_type_id: number;
  type_name: string;

  constructor() {
    this.question_type_id = null;
    this.type_name = '';
  }
}


/**
 * Question with its options
 */
export class IFormQuestionData {
  question: IFormQuestion;
  options: IFormOption[];

  constructor() {
    this.question = new IFormQuestion();
    this.options = [];
  }
}
