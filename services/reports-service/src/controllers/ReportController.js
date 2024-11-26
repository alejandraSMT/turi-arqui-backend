const Report = require('../model/Report.js');
const ReportReasons = require('../utils/ReportReasons');

exports.getReports = async (req, res) => {
    try{
        const { reviewId } = req.params;
        const result = await Report.find({reviewId: reviewId});

        res.status(200).json(result);

    }catch(error){
        console.error(error);
        res.status(500).json({error: "Can't get reports"})
    }
}

exports.postReport = async (req, res) => {
    try{
        const { reviewId, userId, comment, reason } = req.body

        if(!Object.values(ReportReasons).includes(reason)){
            return res.status(400).json({error: "Reason not permitted"});
        }

        const report = new Report({
            reviewId: reviewId,
            userId: userId,
            comment: comment, 
            reason: reason
        })
        const response = await report.save();
        res.status(201).json(response);

    }catch(error){
        console.log(error);
        res.status(500).json({error: "Can't post a report"});
    }
}