import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';

function CheckoutForm(props) {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Button className="white-button" type="submit">
            Submit order
          </Button>
        </div>
      </form>
    </div>
  );
}

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm);

export default CheckoutForm;
