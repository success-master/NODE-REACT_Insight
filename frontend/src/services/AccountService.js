import axios from 'axios';
import { getInsightBackendAPI } from '../utils/Http';
import { handleErrorResponseObject } from '../utils/Utils';


const api = getInsightBackendAPI();
const token = window.localStorage.getItem('access_token');


class AccountService {

    getAccountManagers = (page, pageSize) => {
        return axios.get(`${api}/account/managers`, { headers: {"Authorization" : `Bearer ${token}`} })
            .then(res => {
                return res.data.data;
            })
            .catch(error => handleErrorResponseObject(error));
    };

    getEventsWeeklyData = async (timeBase, companyId, handleTableDataChange) => {
        try{
            const result = await axios.get(`${api}/account/events_weeklies/` + timeBase + '/' + companyId, {headers: {"Authorization" : `Bearer ${token}`}});
            return handleTableDataChange(result.data);
        }catch(error) {
            console.log(error);
            // return {error: error.response}
        }
    }

    getEventsWeeklyBarChartsData =  async (timeBase, companyId, handleTableDataChange) => {
        try{
            const result = await axios.get(`${api}/account/events_weeklies_barcharts/` + timeBase + '/' + companyId, {headers: {"Authorization" : `Bearer ${token}`}});
            return handleTableDataChange(result.data);
        }catch(error) {
            console.log(error);
            // return {error: error.response}
        }
    }

}
export default (new AccountService());
