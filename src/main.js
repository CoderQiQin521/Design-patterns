console.log('main.js');
// http://192.168.6.46:8880/list.json

fetch('/api/list.json')
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    });
