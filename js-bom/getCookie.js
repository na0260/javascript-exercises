function getCookie(name){
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookie.length; i++){
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' '){
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(cookieName) === 0)
            return cookie.substring(cookieName.length, cookie.length);
    }
    return null;
}

getCookie('username');