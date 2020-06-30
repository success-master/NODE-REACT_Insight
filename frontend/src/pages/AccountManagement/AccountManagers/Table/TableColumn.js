import React from 'react';
import { IconButton, Popover, Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CustomDropDown from '../DropDown';

function TableColumn(props) {
  let { accounts } = props;

  return [
    {
      name: 'accounts',
      label: 'Account Name',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <CustomDropDown
              key={tableMeta.rowData[1]}
              accounts={accounts}
              managerAccounts={value}
              accountManager={tableMeta.rowData[1]}>
              {value[0].Company}
            </CustomDropDown>
          );
        }
      }
    },
    {
      name: 'AccountManager',
      label: 'Account Manager',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="account-manager-container">
              <Avatar className="manager-icon"></Avatar>
              {value}
            </div>
          );
        }
      }
    },
    {
      name: 'email',
      label: 'E-mail Address',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return value !== '' ? value : '---';
        }
      }
    },
    {
      name: 'options',
      label: 'Options',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="acm-options">
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </div>
          );
        }
      }
    }
  ];
}
export default TableColumn;
