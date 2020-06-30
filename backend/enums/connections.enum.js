const contract_header = [
    'Company',
    'EventsCompanyName',
    'CompanyID',
    'ContractCompanyName',
    'ContractAddress',
    'ContractID',
    'Active',
    'ContractDate',
    'ContractType',
    'TheirExecutor',
    'TheirExecutorTitle',
    'OurExecutor',
    'GoLiveDate',
    'ContractStartDate',
    'ContractEndDate',
    'ContractEndTerminationDate',
    'ContractMonths',
    'DaysUntilRenewal',
    'BillingStartDate',
    'BillingFrequency',
    'ContractTerm',
    'TermMetric',
    'AnnualContractValue',
    'TotalContractValue',
    'CurrentARR',
    'SegmentID',
    'SegmentName',
    'ProductsPurchased',
    'Product',
    'Discounts',
    'TerminationRights',
    'NoticetoTerminate',
    'NoticetoTerminateUnits',
    'AccountExecutiveID',
    'AccountExecutive',
    'AccountManagerID',
    'AccountManager',
    'TerminationDate',
    'TerminationReasonID',
    'TerminationReason',
    'TerminationNotes',
    'PlanName',
    'PlanName2',
    'AutoRenew',
    'Invoicing',
    'InvoiceAmount',
    'PricePerUser',
    'LicensesPurchased',
    'ContractExternalURL',
    'ContractInternalURL',
    'Delivery'
]

const contracts_waterfall_header = [
    'Company',
    'ContractID',
    'AccountManager',
    'AnnualContractValue',
    'StartDate',
    'EndDate',
    'Months',
    'StartMonth',
    'StartYear',
    'MonthlyValue',
    'SegmentID',
    'Segment',
    'TerminationReasonID',
    'Jan2019',
    'Feb2019',
    'Mar2019',
    'Apr2019',
    'May2019',
    'Jun2019',
    'Jul2019',
    'Aug2019',
    'Sep2019',
    'Oct2019',
    'Nov2019',
    'Dec2019',
    'Jan2020',
    'Feb2020',
    'Mar2020',
    'Apr2020',
    'May2020',
    'Jun2020',
    'Jul2020',
    'Aug2020',
    'Sep2020',
    'Oct2020',
    'Nov2020',
    'Dec2020',
    'Jan2021',
    'Feb2021',
    'Mar2021',
    'Apr2021',
    'May2021',
    'Jun2021',
    'Jul2021',
    'Aug2021',
    'Sep2021',
    'Oct2021',
    'Nov2021',
    'Dec2021',
]

const segment_header = [
    'SegmentID',
    'SegmentName',
    'LowValue',
    'HighValue',
    'MonthlyLowValue',
    'MonthlyHighValue',
]

module.exports = { contract_header, contracts_waterfall_header, segment_header }