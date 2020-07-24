const API_URL = 'http://192.168.1.8:80/';
const API_READ = API_URL +'restapi/api/advs/read.php';
const API_URL_INSERT = API_URL +'restapi/api/advs/insert.php';
const API_URL_UPLOAD = API_URL +'restapi/api/advs/upload_image.php';
const API_URL_GETSINGLE = API_URL + 'restapi/api/advs/read_single.php?id=';
const API_URL_LOGINUSER = API_URL + ' restapi/api/user/login.php';
const API_URL_REGISTRATEUSER = API_URL + 'restapi/api/user/registrate.php';
const API_NOTIFY = API_URL + 'restapi/api/notifications/noti.php';
const API_STORAGE = API_URL + 'restapi/storage/';
const APP_SINGLEADVERT = 'http://localhost:8080/singleadvert/';

export default{
  async fetchAdverts() {
  const res = await fetch(API_READ);    
  return res.json();
  },
  async insertAdvert(advert) {
    await fetch(
    API_URL_INSERT,
    {
      method: 'POST',
      "mimeType": "multipart/form-data",
      body: JSON.stringify(advert)
    }
  );
  },
  async uploadAdvertImage(image){
    var form_data = new FormData();                  
    form_data.append('advert_picture', image);
    
    const response = await fetch(
      API_URL_UPLOAD,
      {
        method: 'POST',
        "mimeType": "multipart/form-data",
        body: form_data             
      }
    );
    const data = await response.text();
    return data;
  },
  async getAdvert(id) {
    const res = await fetch(API_URL_GETSINGLE+id.id);   
    return res.json();
  },
  loginUser(user){
    const res = fetch(API_URL_LOGINUSER,{
      method: 'POST',
      body: user  
      }
    );
    return res;
  },
  async registrateUser(user){
    console.log(user);
    await fetch(
      API_URL_REGISTRATEUSER,
      {
        method: 'POST',
        "mimeType": "multipart/form-data",
        body: JSON.stringify(user)
      }
    );
  },
  async doPoll(){
    fetch(API_NOTIFY)
    .then(response => response.json())
    .then(data => {
      if(data.notify){
        let current_id = data.id;
        if(current_id != localStorage.getItem('isNew')){ 
          localStorage.setItem('isNew',data.id);
          var notification = new Notification(data.title, {
            icon: 'https://boldicenter.com/img/ikon_newest.png',
            body: data.desc,
            tag : 'Új hirdetés',
            image : API_STORAGE+data.image
          });    
          notification.onclick = function () {
            event.preventDefault();
            window.open(APP_SINGLEADVERT+data.id, '_blank');
          };
          notification.onshow = function(){
            console.log("Valami");
          }
          }
        }
      }
    );
  },
}
