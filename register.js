function validData() {
    let company = document.getElementById("company");
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let chair = document.getElementById("chair");
    let booth = document.getElementById("booth");
    let table = document.forms["form"]["table"]

    if (company.value == null || company.value == ""){
            alert("กรุณาใส่ชื่อบริษัท");
        }
    else if (name.value == null || name.value == ""){
            alert("กรุณาใส่ชื่อผู้ติดต่อ");
        }
    else if (phone.value == null || phone.value == ""){
            alert("กรุณาใส่เบอร์ผู้ติดต่อ");
        }
    else if (chair.value < 1 || chair.value > 10){
            alert("จำนวนเก้าอี้ไม่ถูกต้อง");
    }
    else if(booth.value != "10*10 ฟุต" && booth.value != "10*15 ฟุต"){
            alert("กรุณาเลือกขนาดบูธ");
    }
    else {
        alert("ข้อมูลถูกต้อง");
    }
    let data = {
        company : company.value,
        name: name.value,
        phone: phone.value,
        chair: chair.value,
        booth: booth.value,
        table: table.value,
    }
    console.log(data);
}