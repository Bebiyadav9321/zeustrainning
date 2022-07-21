
const CartBody:any=document.querySelector('.Card_body')
const card_data=fetch('./card_data.json')
.then(response =>response.json())
.then(data1=>{
console.log(data1);
  let Carddata:String='';
  for(let data of data1.coursedata){
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
})

