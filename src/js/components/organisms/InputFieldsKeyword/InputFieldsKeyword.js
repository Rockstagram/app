import React from 'react';
import { ControlledInputField } from 'components';

const InputFieldsKeyword = ({ keyword, onChange }) => {
  return (
    <div>
      <ControlledInputField
        label="Niche Keyword:"
        id="keyword"
        placeholder="foodporn"
        name="keyword"
        autoComplete="keyword"
        value={keyword || ''}
        onChange={onChange}
        required="true"
        subText="
                  Enter the most relevant keyword to you niche.
                  This single keyword will be used to find followers
                  interested in your content.
                  Never&nbsp;enter more than one keyword per task."
      />
    </div>
  );
};

export default InputFieldsKeyword;
