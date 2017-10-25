let express = require('express');
let StudentCourseDB = require('../db/studentCourseDB');
let Student = require('../model/Student')
let Course = require('../model/Course')

let route = express.Router();
route.get('/findAll',(req,resp)=>{
  StudentCourseDB.findAll().then((data)=>{
    console.log(data)
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});
// route.get('/findSelectedCourse',(req,resp)=>{
//   StudentCourseDB.findSelectedCourse()
//   .then((data)=>{
//     resp.send(data);
//   }).catch((error)=>{
//     resp.send(error);
//   });
// });

/*
  选课
  studentId 
  courseId
*/
route.get('/selectCourse',(req,resp)=>{
  console.log(req.query.student_id)
  console.log(req.query.course_id)
  StudentCourseDB.selectCourse(+req.query.student_id,+req.query.course_id)
  .then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

/*
  通过学生ID查询已经选课信息
  @param studentId
*/
route.get('/findSelectedCourseByStudentId',(req,resp)=>{
  console.log(req.query)
  StudentCourseDB.findSelectedCourseByStudentId(req.query.student_id)
  .then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

/*
  取消选课
  @param studentId，courseId
*/
route.get('/cancelCourse',(req,resp)=>{
  console.log(req.query.student_id)
  StudentCourseDB.cancelCourse(req.query.student_id,req.query.course_id)
  .then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

/*
  打分
  @param 选课id，分数grade
*/
route.get('/mark',(req,resp)=>{
  console.log(req.query)
  StudentCourseDB.score(req.query.id,req.query.grade)
  .then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
});

module.exports = route;