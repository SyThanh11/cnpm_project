const path = require("path");
const history_model = require("../PersistenceLayer/history")
const authorization_model = require('../PersistenceLayer/authorization');

module.exports = {
    getPrintListSPSO: function (req, res) {
        history_model.getPrintListSPSO(res);
    },

    getBuyListSPSO: function (req, res) {
        history_model.getBuyListSPSO(res);
    },

    getPrintListStudent: [authorization_model.loadCurMember, history_model.getPrintListStudent, function (req, res) {
        res.status(200).json({});
    }],

    getBuyListStudent: [authorization_model.loadCurMember, history_model.getBuyListStudent, function (req, res) {
        res.status(200).json({});
    }],
}