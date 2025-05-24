import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactsForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactsForm() {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();
  const handleSubmit = (valueForm, helpers) => {
    const newContactWithId = { ...valueForm, id: nanoid() };
    dispatch(addContact(newContactWithId));

    helpers.resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(30, 'Too long!')
      .required('Required!'),
    number: Yup.string()
      .min(7, 'Number too short! Min. 7 symbols')
      .max(12, 'Too long!')
      .required('Required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.name}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.number}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          add contact
        </button>
      </Form>
    </Formik>
  );
}
