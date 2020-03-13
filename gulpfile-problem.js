 //引入gulp模块
 const gulp = require('gulp');
    
 let {createWriteStream,createReadStream} =require('fs');
 //定义默认任务
//  gulp.task('demo', function(done) {
//    // 将你的任务的任务代码放在这
//    console.log(1);
//    done();
//  });

//  gulp.task('demo2', async function() {
//     // 将你的任务的任务代码放在这
//     await console.log(2);
//   });
//   gulp.task('demo3', function() {
//     // 将你的任务的任务代码放在这
//     console.log(3);
//     return createReadStream('./package.json',()=>{

//     })
//   });

let rs=createReadStream('./package.json');
let ws=createWriteStream('./haha.json');
rs.on('open',()=>{
    console.log('可读流打开')
})
rs.on('close',()=>{
    console.log('可读流关闭')
})
ws.on('open',()=>{
    console.log('可写流打开')
})
ws.on('close',()=>{
    console.log('可写流关闭')
})
rs.on('data',(data)=>{
    ws.write(data)
})
rs.pipe(ws);