import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import { MuiThemeProvider } from '@material-ui/core/styles';
import tableStyles from './TableStyles';
import tableColumn from './TableColumn';
import tableOptions from './TableOptions';

const ManagersTable = ({ accountManagers, ...props }) => {
  let [tableData, setTableData] = useState(accountManagers.accountManagers);
  let theme = tableStyles();
  let columns = tableColumn({ accounts: props.accounts });
  let options = tableOptions({ data: accountManagers });

  useEffect(() => {
    setTableData(accountManagers.accountManagers);
  }, [accountManagers.accountManagers]);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <MUIDataTable
          data={tableData || []}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </>
  );
};

export default ManagersTable;
