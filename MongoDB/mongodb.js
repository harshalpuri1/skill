const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Database_1')
.then(()=>console.log('Databse is connected'))
.catch(()=>console.log('Database is not connected'))

const courseSchema = new mongoose.Schema({
    title:String,
    cType:String,
    noVideos:Number,
    author:String,
    active:Boolean
})

const courseRecord =new mongoose.model("courseRecord",courseSchema);

// const reactData = new courseRecord({
//     title:'React JS',
//     cType:'Front End',
//     noVideos:56,
//     author:'Richa Arora',
//     active:true
// })
// reactData.save();

const createDocument = async()=>{
    try{
        const vueData = new courseRecord({
            title:'Node JS',
            cType:'Back End',
            noVideos:46,
            author:'Richa Arora',
            active:true

        })
        const result = await vueData.save();
        console.log(result);
    }
    catch(e){
        console.log(e);
    }
}
createDocument();