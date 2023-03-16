import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/',homeController.gethomePage);
    router.get('/dangkhoa',(req, res) =>{
        return res.send('Hello Đăng Khoa')
    });
    router.get('/crud',homeController.getCRUD);

    router.post('/post-crud',homeController.postCRUD);
 return app.use("/", router);
}
module.exports = initWebRoutes;