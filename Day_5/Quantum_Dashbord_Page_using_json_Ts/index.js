var CartBody = document.querySelector('.Card_body');
var card_data = fetch('./card_data.json')
    .then(function (response) { return response.json(); })
    .then(function (data1) {
    console.log(data1);
    var Carddata = '';
    for (var _i = 0, _a = data1.coursedata; _i < _a.length; _i++) {
        var data = _a[_i];
        Carddata += "\n    <div class=\"card\">\n                <div class=\"cardheader\">\n                    <img class=\"card-img\" src=\"".concat(data.photo, "\" alt=\"cardimg\">\n                    <div class=\"card-content\" style=\"width: 70%;\">\n                        <div class=\"acc\" style=\"display: flex; justify-content: space-between;\">\n                            <h2 style=\"font-size:16px;\">").concat(data.name, "</h2>\n                            <img src=\"favourite.svg\" alt=\"favourite\">\n                        </div>\n                        <p>").concat(data.subject, " <span> | </span> ").concat(data.grade, " <span style=\"color: green;\">").concat(data.Number1, "</span></p>\n                        <p style=\"padding-top: 2px;\"><span style=\"padding-right:4px ;\"> <b>").concat(data.N_u, "</b> </span>").concat(data.unit, " <span\n                                style=\"padding:0px 4px ;\">").concat(data.N_l, " </span>").concat(data.lesson, "<span style=\"padding:0px 4px ;\">").concat(data.N_T, " </span>\n                                ").concat(data.topic, " </p>\n\n                        <select class=\"coursesname\" name=\"coursesname\"\n                            style=\"padding: 10px 0px; margin-top: 3px; border: none; border-bottom: 2px solid #000000;\">\n                            <option value=\"\">").concat(data.selectData, "</option>\n                        </select>\n                        <p style=\"padding-top: 8px;\"> ").concat(data.Number_student, " <span style=\"padding-right:4px ;\">").concat(data.pipe, "</span>").concat(data.date, " </p>\n                    </div>\n                </div>\n                <hr />\n                <div class=\"card-footer\">\n                    <img src=\"preview.svg\" alt=\"preview image\">\n                    <img src=\"manage%20course.svg\" alt=\"no\">\n                    <img src=\"grade%20submissions.svg\" alt=\"no\">\n                    <img src=\"reports.svg\" alt=\"no\">\n                </div>\n\n            </div>\n\n    ");
    }
    CartBody.innerHTML = Carddata;
});
