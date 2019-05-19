import React from 'react';
import { Field, reduxForm } from 'redux-form';

function CheckoutForm(props) {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <button type="submit">Submit order</button>
        </div>
      </form>
    </div>
  );
}

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm);

export default CheckoutForm;
