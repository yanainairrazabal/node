var express = require('express');
var fs = require('fs');
var router = express.Router();

const PURCHASES_FILE = 'public/purchases/purchases.json';

router.post('/buy', function (req, res) {
    let result = confirm(req.body);
    if(result) {
        return res.json({
            message:"success"
        });
    }
    return res.json({error :"error saving data"});
})

function confirm(purchase) {
    let purchases = JSON.parse(fs.readFileSync(PURCHASES_FILE, "utf8"));
    purchases.push(purchase);

    fs.writeFileSync(PURCHASES_FILE,JSON.stringify(purchases),{encoding:'utf8',flag:'w'}, err => {
        console.log(err)
    })
    return true;
}

module.exports = router;