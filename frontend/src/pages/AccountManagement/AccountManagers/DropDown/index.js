import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import CustomMenu from './customMenu';
import CustomToggle from './customToggle';
import CustomDropDownItem from './customDropDownItem';

const CustomDropDown = ({
  accounts,
  managerAccounts,
  accountManager,
  ...props
}) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {props.children}
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} accountManager={accountManager}>
        {accounts.map((account, index) => {
          return (
            <Dropdown.Item
              key={index}
              as={CustomDropDownItem}
              value={account}
              managedAccounts={managerAccounts}
            />
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default CustomDropDown;
