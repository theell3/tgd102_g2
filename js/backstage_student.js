//組件：學生會員詳細資料
// Vue.component('student-detail',{
//     data(){
//         return{}       
//     },
//     methods:{},
//     mounted(){
//         //顯示第一頁的資料
//         fetch(`php/searchstudent.php?page=1`)
//         .then(rsp => rsp.json())
//         .then(userArr => {    
//             // console.log(userArr)
//             this.studentData = userArr
//         })

//         //根據選擇的頁碼，顯示不同筆資料
//         let pageContent = document.querySelectorAll(".pageContent");
//         for(let i = 0; i < pageContent.length; i++ ){
//             pageContent[i].addEventListener("click", e => {
//                 // alert(e.target.innerText) //確認傳遞的數值和頁碼相同
//                 fetch(`php/searchstudent.php?page=${e.target.innerText}`) //連到資料庫 。?的右邊可自訂變數讓php取資料    
//                 //${e.target.innerText}
//                 .then(rsp => rsp.json())
//                 .then(userArr => {            
//                     // console.log(userArr)
//                     this.studentData = userArr                    
//                 })
//             })
//         }
//     },
//     template:`
//         <div class="showDetail" >
//             <tr>
//                 <td class="email"><h3>信箱</h3></td>
//                 <td class="phone"><h3 >電話</h3></td>
//                 <td class="address"><h3>地址</h3></td>
//             </tr> 

//             <tr class="item">
//                 <td class="email"><h3>h462842@gmail.com</h3></td>
//                 <td class="phone"><h3>0988274788</h3></td>
//                 <td class="address"><h3>新北市板橋區篤行路三段</h3></td>
//             </tr>
//         </div>
//     `,
// })

//組件：學生會員資料
Vue.component('student-data',{ 
    data(){
        return{
            studentData: [],
            showDetail:false, //v-if使用
        }       
    },
    methods:{
        toggle:function(){ //切換showDetail的detail
            this.showDetail = !this.showDetail
        },
        showD(e){ //顯示詳細資訊
            // alert("OK")
            // e,target
        },
        banOpen(){
            // console.log()
        }
    },
    mounted() {       
        //顯示第一頁的資料
        fetch(`php/searchstudent.php?page=1`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            // console.log(userArr)
            this.studentData = userArr
        })

        //根據選擇的頁碼，顯示不同筆資料
        let pageContent = document.querySelectorAll(".pageContent");
        for(let i = 0; i < pageContent.length; i++ ){
            pageContent[i].addEventListener("click", e => {
                // alert(e.target.innerText) //確認傳遞的數值和頁碼相同
                fetch(`php/searchstudent.php?page=${e.target.innerText}`) //連到資料庫 。?的右邊可自訂變數讓php取資料    
                //${e.target.innerText}
                .then(rsp => rsp.json())
                .then(userArr => {            
                    // console.log(userArr)
                    this.studentData = userArr                    
                })
            })
        }
    },
    template: `
    <tbody>
        <div class="item" v-for="students in studentData">
                <tr class="itemBasic">
                    <td class="id"><h3>C111{{students.ID}}</h3></td>
                    <td class="name"><h3>{{students.NAME}}</h3></td>
                    <td class="gender"><h3>{{students.GENDER}}</h3></td>
                    <td class="birthday"><h3>{{students.BIRTHDAY}}</h3></td>
                    <td class="coin"><h3>{{students.COIN}}</h3></td>
                    <td class="blacklist"><a href="#"><h3>{{students.BLACKLIST}}</h3></a></td>
                    <td class="record"><a href="#"><h3>10</h3></a></td>
                    <td class="detail"><h3><button class="btna3" @click="showD"><h4>詳細資料</h4></button></h3></td>
                    <td class="create-date"><h3>{{students.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3></td>
                    <td class="ban"><h3><i class="fa-solid fa-ban"></i></h3></td>    
                </tr>

                <tr class="itemDetailTile">
                    <td class="email"><h3>信箱</h3></td>
                    <td class="phone"><h3 >電話</h3></td>
                    <td class="address"><h3>地址</h3></td>
                </tr>  
                
                <tr class="itemDetail">
                    <td class="email"><h3>h462842@gmail.com</h3></td>
                    <td class="phone"><h3>0988274788</h3></td>
                    <td class="address"><h3>新北市板橋區篤行路三段</h3></td>
                </tr>
        </div>
    </tbody>
    `,
})



let vm = new Vue({ //設定想要預載的html結構
    el:'#backstage_student_app',
    data: { 
        //設定要先掛載的東西
    },
    methods: {},      
    template: //預先掛載的div結構
        `
        <table>
            <div class="thead">
                    <tr>
                        <th class="id"><h3>會員編號</h3></th>
                        <th class="name"><h3 >會員姓名</h3></th>
                        <th class="gender"><h3>性別</h3></th>
                        <th class="birthday"><h3>生日</h3></th>
                        <th class="coin"><h3>點數</h3></th>
                        <th class="blacklist"><h3>被檢舉數</h3></th>
                        <th class="record"><h3>加值紀錄</h3></th>
                        <th class="detail"><h3></h3></th>
                        <th class="create-date"><h3>建立日期</h3></th>
                        <th class="ban"><h3>停權</h3></th>
                    </tr> 
            </div>
                               
            <student-data></student-data>            
        </table>
        `,  
    })     


// <div class="showDetail" v-show="showDetail">
// <td class="email"><h3>h462842@gmail.com</h3></td>
// <td class="phone"><h3>0988274788</h3></td>
// <td class="address"><h3>新北市板橋區篤行路三段</h3></td>
// </div>

// {on:false}