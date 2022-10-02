const __app__ = require('../package.json')

module.exports.getHello = async (req, res) => {
    try{
        const packageData = {
            appTitle: __app__.name,
            appVersion: __app__.version,
            appAuthor: __app__.author,
            greeting: `Hello, ${__app__.author}`
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(packageData));
        res.end();
    }
    catch(err){
        res.writeHead(500, { 'Content-Type': 'application/json' });
       res.write(JSON.stringify(err))
       res.end()
    }
}