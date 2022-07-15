const CartBody:any=document.querySelector('.Card_body')

let data1:{
  name: string;
  subject: string;
  selectData: string;
  photo: string;
  grade: string;
  Number1: number;
  Number_student:string;
  date: string;
  N_u: number;
  unit: string;
  N_l: number;
  lesson: string;
  N_T:number;
  topic:string;
  pipe:string;
}[] = [
    {
      name: "Acceleration",
      subject: "Physics",
      selectData: "Mr.Frank's Class B ",
      photo: "imageMask-1.svg",
      grade: "Grade 7",
      Number1:+2,
      Number_student:"50 students",
      date:"21-Jan-2020- 21-Aug-2020",
      N_u:4,
      unit:"Units",
      N_l:18,
      lesson:"Lessons",
      N_T:24,
      topic:"Topics",
      pipe:"|",
    },
    {
      name: "Displacement ,Velocity and Speed",
      subject: "Physics",
      selectData: "No Classes ",
      photo: "imageMask-2.svg",
      grade: "Grade 6",
      Number1:+3,
      Number_student:"",
      date:"",
      N_u:2,
      unit:"Units",
      N_l:15,
      lesson:"Lessons",
      N_T:20,
      topic:"Topics",
      pipe:"",
    },
    {
      name: "Introduction to Biology: Micro organisms and how they affec...",
      subject: "Biology",
      selectData: "All Classes",
      photo: "imageMask-3.svg",
      grade: "Grade 4",
      Number1:+1,
      Number_student:"300 students",
      date:"",
      N_u:4,
      unit:"Units",
      N_l:18,
      lesson:"Lessons",
      N_T:24,
      topic:"Topics",
      pipe:"",
  
    },
    {
      name: "Introduction to High School Mathematics",
      subject: "Mathematics",
      selectData: "Mr.Frank's Class B",
      photo: "imageMask.svg",
      grade: "Grade 8",
      Number1:+3,
      Number_student:"44 students",
      date:"14-Oct-2019- 20-Oct-2020",
      N_u:4,
      unit:"Units",
      N_l:18,
      lesson:"Lessons",
      N_T:24,
      topic:"Topics",
      pipe:"|",
    },
  ]

  let Carddata:String='';
  for(let data of data1){
    Carddata+=`
    <div class="card">
                <div class="cardheader">
                    <img class="card-img" src="${data.photo}" alt="cardimg">
                    <div class="card-content" style="width: 70%;">
                        <div class="acc" style="display: flex; justify-content: space-between;">
                            <h2 style="font-size:16px;">${data.name}</h2>
                            <img src="favourite.svg" alt="favourite">
                        </div>
                        <p>${data.subject} <span> | </span> ${data.grade} <span style="color: green;">${data.Number1}</span></p>
                        <p style="padding-top: 2px;"><span style="padding-right:4px ;"> <b>${data.N_u}</b> </span>${data.unit} <span
                                style="padding:0px 4px ;">${data.N_l} </span>${data.lesson}<span style="padding:0px 4px ;">${data.N_T} </span>
                                ${data.topic} </p>

                        <select class="coursesname" name="coursesname"
                            style="padding: 10px 0px; margin-top: 3px; border: none; border-bottom: 2px solid #000000;">
                            <option value="">${data.selectData}</option>
                        </select>
                        <p style="padding-top: 8px;"> ${data.Number_student} <span style="padding-right:4px ;">${data.pipe}</span>${data.date} </p>
                    </div>
                </div>
                <hr />
                <div class="card-footer">
                    <img src="preview.svg" alt="preview image">
                    <img src="manage%20course.svg" alt="no">
                    <img src="grade%20submissions.svg" alt="no">
                    <img src="reports.svg" alt="no">
                </div>

            </div>

    `
  }
  CartBody.innerHTML=Carddata

