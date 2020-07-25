let platform = window.location.hostname !== 'localhost' ? 'production' : 'local';
let settings ={};

if(platform === 'local'){
    settings ={
        apiUrl: 'https://api.bongoexpresscourier.com',
        appName: 'BongoExpress',
        subect: 'BongoExpress',
        baseUrl: '',
        
    }
}else {
    settings ={
        apiUrl: 'https://api.bongoexpresscourier.com',
        appName: 'BongoExpress',
        subect: 'BongoExpress',
        baseUrl: '',
    }
}

export default settings