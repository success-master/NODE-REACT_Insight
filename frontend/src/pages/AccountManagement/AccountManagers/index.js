import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, makeStyles } from '@material-ui/core';
import Header from '../../Dashboard/Header';
import ManagersTable from './Table';

const useStyles = makeStyles({
  root: {
    height: 56,
    textTransform: 'capitalize',
    backgroundColor: '#1C5DE1',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 600,
    fontStyle: 'normal',
    '&:hover': {
      backgroundColor: '#1C5DE1'
    },
    '&:nth-child(1)': {
      marginRight: 24,
      minWidth: 205
    }
  }
});

const AccountManagers = ({ accountManagers, accounts, ...props }) => {
  let classes = useStyles();
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
    focusedInput: null
  });
  const onSelectChange = (event) => {};

  useEffect(() => {
    props.getAccountManagers();
  }, []);

  return (
    <div className="dashboard managers">
      <Header
        title="Account Management"
        subTitle="Account Managers"
        date={date}
        setDate={setDate}
        type={'account-managers'}>
        <Button className={classes.root}>+ Add New Users in Bulk</Button>
        <Button className={classes.root}>+ Add New User</Button>
      </Header>

      <div className="managers-container">
        <div className="table-header position-absolute">
          <div className="table-name">User List</div>
        </div>
        <div className="table-container">
          <ManagersTable
            accountManagers={accountManagers}
            accounts={accounts}
          />
        </div>
      </div>
    </div>
  );
};

function mapAccounts(accountManagers) {
  let accounts = [];
  if (accountManagers)
    accountManagers.forEach((manager) => {
      accounts = accounts.concat(manager.accounts);
    });
  return accounts;
}

function mapStateToProps({ accountManagers }) {
  return {
    accountManagers,
    accounts: mapAccounts(accountManagers.accountManagers)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAccountManagers: dispatch.accountManagers.getAccountManagers
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountManagers);
