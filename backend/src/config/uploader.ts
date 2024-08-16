import { request } from "express";
import multer from "multer";
import path from "path"

const storage = multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

const photoUpload = multer({
    storage: storage,         
    limits:{
        //4 arquivos de 100 MB
        fileSize: 1024*1024*100,
        files:1
    },
    fileFilter:function(request,file,callBack){
        const allowedFileTypes = [ "image/png","image/jpg","image/jpeg"]
        if (!allowedFileTypes.includes(file.mimetype)){
            const message = "somente arquivos PNG, JPG e JPEG"
            return callBack(new Error())
        }
        callBack(null,true) //aceita arquivo caso seja suportado
    },

})

export{
    photoUpload
}