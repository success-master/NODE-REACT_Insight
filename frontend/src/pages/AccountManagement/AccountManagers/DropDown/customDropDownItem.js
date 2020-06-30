import React, { useState, forwardRef } from 'react';
import CustomCheckbox from './customCheckbox';

const CustomDropDownItem = forwardRef(
  ({ children, value, managedAccounts }, ref) => {
    let [checked, setChecked] = useState(
      managedAccounts.findIndex((account) => {
        return account.CompanyID === value.CompanyID;
      }) > -1
    );
    const onChange = (event, ckValue) => {
      console.log(value);
    };

    return (
      <li className="dropdown-item">
        <CustomCheckbox
          value={value.Company}
          checked={checked}
          onChange={onChange}
        />
      </li>
    );
  }
);
export default CustomDropDownItem;
