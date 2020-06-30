import React, { useEffect, useState, useRef } from 'react';
import { Button, Popover, IconButton, Menu, MenuItem } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowBackIos';
import ArrowRightIcon from '@material-ui/icons/ArrowForwardIos';
import Select from 'react-select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menus from './Menus';

function DatePickerPopover({
  popoverId,
  handleClose,
  onShow,
  selectOption,
  ...props
}) {
  // const currentDate = new Date();
  const currentYear = new Date().getFullYear();
  const selectElementHtml = document.querySelector('#datepicker-select');
  const [activeBtn, setActiveBtn] = useState('custom');
  const [currentPeriodSpec, setCurrentPeriodSpec] = useState(currentYear);
  const [currentPeriodCus, setCurrentPeriodCus] = useState(currentYear);
  const [activeYearSpec, setActiveYearSpec] = useState(currentYear);
  const [activeYearCus, setActiveYearCus] = useState([
    currentYear,
    currentYear - 1
  ]);
  const [customYears, setCustomYears] = useState([]);
  const [specificYears, setSpecificYears] = useState([]);
  const [popoverOpen, setPopoverOpen] = useState(null);
  const [period, setPeriod] = useState({ startDate: '', endDate: '' });
  // Select state
  const [periodSelected, setPeriodSelected] = useState(currentYear);

  useEffect(() => {
    let buttonsLength = 12;
    let netSpecYears = [];
    let newCustomYears = [];

    for (let i = 0; buttonsLength > i; i++) {
      netSpecYears = [...netSpecYears, currentPeriodSpec - i];
    }

    for (let i = 0; buttonsLength * 2 > i; i++) {
      if (i % 2 === 0) {
        newCustomYears = [
          ...newCustomYears,
          [currentPeriodCus - i, currentPeriodCus - (i + 1)]
        ];
      }
    }

    setSpecificYears(netSpecYears);
    setCustomYears(newCustomYears);
  }, [currentPeriodSpec, currentPeriodCus]);

  const onChangePeriod = (dir, type) => {
    let current = null;
    if (dir === 'prev') {
      if (type === 'cus') {
        current = customYears[0][0] + 12 * 2;
        return setCurrentPeriodCus(current);
      } else {
        current = specificYears[0] + 12;
        return setCurrentPeriodSpec(current);
      }
    }
    if (dir === 'next') {
      if (type === 'cus') {
        current = customYears[customYears.length - 1][1] - 1;
        return setCurrentPeriodCus(current);
      } else {
        current = specificYears[specificYears.length - 1] - 1;
        return setCurrentPeriodSpec(current);
      }
    }
  };

  const onChangeSelect = (data) => {
    setPeriodSelected(data.value);
    setPopoverOpen(true);
  };

  if (customYears.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>

        {/*{filterDate.type === 'custom'*/}
        {/*  ? `${filterDate.date[0]} - ${filterDate.date[1]} `*/}
        {/*  : filterDate.date[0]}*/}
        <Menus />

      {/*<Select*/}
      {/*  id="datepicker-select"*/}
      {/*  onChange={(data) => onChangeSelect(data)}*/}
      {/*  classNamePrefix="select_datepicker"*/}
      {/*  options={[*/}
      {/*    { value: 'monthly', label: 'Monthly' },*/}
      {/*    { value: 'quarterly', label: 'Quarterly' },*/}
      {/*    { value: 'yearly', label: 'Yearly' }*/}
      {/*  ]}*/}
      {/*/>*/}
      <Popover
        id="datepicker-popover"
        open={popoverOpen}
        anchorEl={selectElementHtml}
        className="popover-action__modal"
        onClose={() => setPopoverOpen(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}>
        <div className="content-toolbar-datepicker">
          <div className="MuiPickersBasePicker-container__toolbar-control">
            <Button
              className={activeBtn === 'custom' ? 'dt-btn-active' : 'dt-btn'}
              onClick={() => setActiveBtn('custom')}>
              Custom Year
            </Button>
            <Button
              className={activeBtn === 'specific' ? 'dt-btn-active' : 'dt-btn'}
              onClick={() => setActiveBtn('specific')}>
              Specific Year
            </Button>
          </div>
          <div className="picker-control">
            <div className="picker-control--left">
              Select starting and ending
            </div>
            {activeBtn === 'custom' ? (
              <div className="picker-control--right">
                <IconButton
                  onClick={() => onChangePeriod('prev', 'cus')}
                  aria-label="left"
                  size="large"
                  disabled={currentPeriodCus === currentYear}>
                  <ArrowLeftIcon />
                </IconButton>
                <div className="picker-control__current">
                  {customYears[0][0]} - {customYears[customYears.length - 1][1]}
                </div>
                <IconButton
                  onClick={() => onChangePeriod('next', 'cus')}
                  aria-label="right"
                  size="large">
                  <ArrowRightIcon />
                </IconButton>
              </div>
            ) : (
              <div className="picker-control--right">
                <IconButton
                  onClick={() => onChangePeriod('prev', 'spec')}
                  aria-label="left"
                  size="large"
                  disabled={currentPeriodSpec === currentYear}>
                  <ArrowLeftIcon />
                </IconButton>
                <div className="picker-control__current">
                  {specificYears[0]} - {specificYears[specificYears.length - 1]}
                </div>{' '}
                <IconButton
                  onClick={() => onChangePeriod('next', 'spec')}
                  aria-label="right"
                  size="large">
                  <ArrowRightIcon />
                </IconButton>
              </div>
            )}
          </div>
          <div className="picker-body">
            {activeBtn === 'specific' &&
              specificYears.map((key) => {
                return (
                  <Button
                    onClick={() => setActiveYearSpec(key)}
                    className={
                      activeYearSpec === key
                        ? 'picker-item active'
                        : 'picker-item '
                    }
                    key={key}>
                    {key}
                  </Button>
                );
              })}

            {activeBtn === 'custom' &&
              customYears.map((key) => {
                return (
                  <Button
                    onClick={() => setActiveYearCus(key)}
                    className={
                      activeYearCus.includes(key[0]) ||
                      activeYearCus.includes(key[1])
                        ? 'picker-item active'
                        : 'picker-item '
                    }
                    key={key[0] + key[1]}>
                    {key[0]} - {key[1]}
                  </Button>
                );
              })}
          </div>
          <div className="picker-footer">
            <Button className="btn-text" onClick={() => setPopoverOpen(null)}>
              Cancel
            </Button>
            <Button
              className="btn-block"
              onClick={() => {
                onShow(
                  activeBtn,
                  activeBtn === 'custom' ? activeYearCus : activeYearSpec
                );
              }}>
              Show
            </Button>
          </div>
        </div>
      </Popover>
    </>
  );
}
export default DatePickerPopover;
