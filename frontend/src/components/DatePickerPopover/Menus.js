import React, { useEffect, useState, useRef } from 'react';
import { Button, Popover, IconButton, Menu, MenuItem } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowBackIos';
import ArrowRightIcon from '@material-ui/icons/ArrowForwardIos';
import Select from 'react-select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function Menus({ ...props }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [path, setPath] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        size="large"
        aria-controls="datepicker-menu-root"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={{
          border: '1px solid #E4E4E4',
          borderRadius: '4px',
          height: '28px',
          padding: '3px 12px',
          color: '#495660',
          fontWeight: 600,
          textTransform: 'capitalize'
        }}>
        {path ? (
          <>
            <ChevronLeftIcon /> {path}
          </>
        ) : (
          <>
            Select
            <ExpandMoreIcon
              style={{
                marginLeft: '12px',
                color: '#495660'
              }}
            />
          </>
        )}
      </IconButton>
      <Menu
        id="datepicker-menu-root"
        className="datepicker-menu-root"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}>
        <MenuItem onClick={() => setPath('monthly')}>Monthly</MenuItem>
        <MenuItem onClick={() => setPath('quarterly')}>Quarterly</MenuItem>
        <MenuItem onClick={() => setPath('yearly')}>Yearly</MenuItem>
      </Menu>
    </div>
  );
}
