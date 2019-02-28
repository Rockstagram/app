import React from 'react';
import { ControlledInputField } from 'components';

const InputFieldsDirectMessage = ({ text, onChange }) => {
  const subText = (
    <React.Fragment>
      Enter a text, that will be send as direct message to your followers.
      <br />
      <em>Note: Rockstagram will never text a user more than once.</em>
      <br />
      <ul>
        <li>- [[username]]: will be replaced by the followers username</li>
      </ul>
    </React.Fragment>
  );
  return (
    <div>
      <ControlledInputField
        label="Free Text:"
        id="text"
        placeholder="Dear [[username]], thanks for following us! What do you think about https://www.rockstagram.app/ ?"
        name="text"
        type="textarea"
        autoComplete="message"
        value={text || ''}
        onChange={onChange}
        required="true"
        subText={subText}
      />
    </div>
  );
};

export default InputFieldsDirectMessage;
