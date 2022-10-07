$(function () {

    const name = document.querySelector("#name")
    const unit_num = document.querySelector("#unit_num")
    const principle = document.querySelector("#principle")
    const property = document.querySelector("#property")
    const city = document.querySelector("#city")
    const district = document.querySelector("#district")
    const address = document.querySelector("#address")
    const intro = document.querySelector("#intro")
    const serve = document.querySelector("#serve")
    const welfare = document.querySelector("#welfare")
    const password = document.querySelector("#password")
    const phone = document.querySelector("#phone")
    const email = document.querySelector("#email")
    const principle_tel = document.querySelector("#principle_tel")
    const ext = document.querySelector("#ext")

    document.querySelector('.submit').addEventListener('click', () => {
        console.log('true');           
      
        fetch('./php/company_regist.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                unit_num: unit_num.value,
                principle: principle.value,
                property: property.value,
                city: city.value,
                district: district.value,
                address: address.value,
                intro: intro.value,
                serve: serve.value,
                welfare: welfare.value,
                password: password.value,
                phone: phone.value,
                email: email.value,
                principle_tel: principle_tel.value,
                ext: ext.value

            })
        })
        .then(resp => resp.json())
        .then(result => {
            let companyData = []; //準備一個空陣列用來裝回傳的資料
            companyData = result; //回傳資料裝進去空陣列
            location.replace('../dist/company_login.html');
            //    console.log(studentData) //確認回傳結果有ID值
            //    console.log(studentData[0].ID) //有找到ID
        });

    })


})

