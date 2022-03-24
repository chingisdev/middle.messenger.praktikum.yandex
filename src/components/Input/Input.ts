import Block from '../../utils/Components/Block';
import template from './template.hbs';
import { saveGlobalForm, validation, validator } from '../../utils/Components/Validation';

export interface IInput {
  class: string,
  rootClass?: string,
  name?: string,
  type?: string,
  placeholder?: string,
  minLength?: string,
  disabled?: string,
  required?: string,
  events?: Record<string, (event) => void>
}

export class Input extends Block<IInput> {
  constructor(props: IInput) {
    super(props);

    this.setProps({
      events: {
        blur: (event) => {
          event.preventDefault();
          validation(event, this.props.rootClass, this.props.name, validator);
          saveGlobalForm(this.props.name, event.currentTarget.value);
        },
        focus: (event) => {
          event.preventDefault();
          validation(event, this.props.rootClass, this.props.name, validator);
        },
      }
    })
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
