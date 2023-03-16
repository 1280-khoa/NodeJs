import db from '../models/index';
import CRUDServices from '../services/CRUDServices';

let gethomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}
let getCRUD = (req,res)=>{
    return res.render('crud.ejs')
}
let postCRUD = async(req,res)=>{
    await CRUDServices.createNewUser(req.body);
    return res.send('post crud from server')
}
module.exports = {
    gethomePage: gethomePage,
    getCRUD: getCRUD,
    postCRUD : postCRUD,


}
