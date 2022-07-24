const db = require('../configs/database_config');
const crypto = require('randomstring');

module.exports ={
    // Ambil data semua dagangan
    getkulinertradisional(req,res){
            db.query(
                `
                SELECT * FROM tb_kulinertradisional;
                `
            , function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    datadagangan: results 
                });
            });
    },
    // Ambil data dagangan berdasarkan ID
    getkulinertradisionalbyid(req,res){
        let id = req.params.id;
            db.query(
                `
                SELECT * FROM tb_kulinertradisional WHERE kuliner_id = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    datadagangan: results
                });
            });
    }
}