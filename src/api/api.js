const API_URL = 'http://192.168.1.10:80/restapi/api/advs/read.php';
const API_URL_INSERT = 'http://192.168.1.10:80/restapi/api/advs/insert.php';
const API_URL_UPLOAD = 'http://192.168.1.10:80/restapi/api/advs/upload_image.php';
const API_URL_GETSINGLE = 'http://192.168.1.10:80/restapi/api/advs/read_single.php?id=';
const API_URL_LOGINUSER = 'http://192.168.1.10:80/restapi/api/user/login.php';
const API_URL_REGISTRATE = 'http://192.168.1.10:80/restapi/api/user/registrate.php';



export default{
    async fetchAdverts() {
       const res = await fetch(API_URL);    
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
        // TODO make login authentication work, If authentication is correct, send back cookies 
        console.log(user);
        const res = fetch(API_URL_LOGINUSER,{
            method: 'POST',
            body: user  
            }
        );
        return res;
    },
    registrateUser(user){
        console.log(user);
        const res = fetch(API_URL_REGISTRATE,{
            method: 'POST',
            "mimeType": "multipart/form-data",
            body: JSON.stringify(user)
            }                 
         )
    },
}
