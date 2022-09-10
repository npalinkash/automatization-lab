const __app__ = require('../package.json')

module.exports.getHello = async (req, res) => {
    try{
        const packageData = {
            appTitle: __app__.name,
            appVersion: __app__.version,
            appAuthor: __app__.author
        }

        res.status(200).json(packageData)
    }
    catch(err){
       res.status(500).json({
        success: false,
        msg: err.message ? err.message : err
       })
    }
}