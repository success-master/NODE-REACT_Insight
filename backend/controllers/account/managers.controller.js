const ResponseFormat = require('../../core').ResponseFormat;
const db = require("../../db/models").sequelize;



module.exports = {

    async getAccountManagers(req, res){
        try {
            let result = await db.query(`SELECT COUNT(Company) AS totalAccounts, AccountManager from Contracts GROUP BY AccountManager`, {
                type: db.QueryTypes.SELECT
            });
            let formatedResp = [];
            let promises = [];

            result.forEach(async (item, i) => {
                promises.push(db.query(`SELECT DISTINCT Company, CompanyID from Contracts where AccountManager="${item.AccountManager}"`, {
                    type: db.QueryTypes.SELECT
                }));
            });

            let accQuery = await Promise.all(promises);
            accQuery.forEach((query, index) => {
                formatedResp.push({
                    ...result[index],
                    email: '',
                    accounts: query
                });
            });

            return res.status(200).json(ResponseFormat.build(
                formatedResp,
                'Account Managers Information Reterive successfully',
                200,
                'success'
            ));
        } catch (e) {
            return res.status(500).json(ResponseFormat.build(
                e,
                'Internal server error',
                500,
                'Error'
            ));
        }
    }
};
