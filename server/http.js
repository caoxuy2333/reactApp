const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

var objMulter = multer();
var app = express();
app.use(objMulter.any()); // formdata对象
app.use(bodyParser.json()); // payload参数

/*
-- 存放切割片段的json
json = {
  '123': {      // '123' 完整文件的md5值
    count: 100, // 总片段数
    current: 42, // 当前上传的片段数
    list: ['123', '3141341'], // 已上传的片段文件的md5值
  }
}
*/
const json = {}

// 上传文件片段 页面响应
app.post('/uploadFilePart', async function (req, res) {
  const { current, count, fileName, fileMd5, partMd5 } = req.body;
  const buffer = req.files[0].buffer;
  let resCurrent = ''; // 文件片段位置
  let partEnd = false; // 文件是否完成合并上传
  let isPart = false; // 是否存在片段, 判断是否从断点出上传
  if (json[fileMd5]) isPart = json[fileMd5].list.includes(partMd5);
  if (isPart) {
    if (parseInt(current) === parseInt(count) - 1) {
      // 合并
      console.log('合并文件, 删除json对象和片段文件, 未实现')
      json[fileMd5].current = current;
      json[fileMd5].list[current] = partMd5;
      concatPart(fileMd5, fileName)
      partEnd = true;
    }
    resCurrent = json[fileMd5].current;
  } else {
    if (parseInt(current) === parseInt(count) - 1) {
      await upload(partMd5, buffer);
      partEnd = true;
      console.log('合并文件, 删除json对象和片段文件, 未实现')
      // 合并
      json[fileMd5].current = current;
      json[fileMd5].list[current] = partMd5;
      concatPart(fileMd5, fileName)
      partEnd = true;
      // 删除json对象
    } else if (current === '0') {
      await upload(partMd5, buffer);
      json[fileMd5] = {
        count,
        current,
        list: [partMd5]
      }
    } else {
      await upload(partMd5, buffer);
      json[fileMd5].current = current;
      json[fileMd5].list[current] = partMd5;
    }
    resCurrent = current;
  }
  let resMsg = {
    current: resCurrent,
    partEnd
  }
  res.send(JSON.stringify(resMsg));
})

// 存储片段
const upload = async function (md5, buffer) {
  await new Promise((resolve, reject) => {
    fs.writeFile(path.resolve('part/' + md5), buffer, (err) => {
      if (err) return console.log(err);
      resolve(true)
    });
  })
}

// 将片段合成文件
let concatPart = async function (md5, fileName) {
  let buffs = Buffer.from('')
  let list = json[md5].list;
  for (let i = 0; i < list.length; i++) {
    let l = await new Promise((reject, resolve) => {
      fs.readFile(path.resolve('part/' + list[i]), function (err, data) {
        reject(data);
      });
    })
    buffs = Buffer.concat([buffs, l])
  }

  fs.writeFile(path.resolve('part/' + fileName), buffs, (err) => {
    if (err) return console.log(err);
    console.log(json);
  });
}

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  // 创建文件夹, 存放合成片段
  fs.mkdir('part', () => { })
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

module.exports = server;