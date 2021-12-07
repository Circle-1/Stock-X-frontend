import axios from 'axios';

const fileLoad = () => {
    axios({
        url: 'http://localhost:3000/api/uploadfile',
        method: 'GET',
        responseType: 'blob',

    }).then((response) => {
        const URL = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = URL;
        link.setAttribute('download', 'data.csv');
        document.body.appendChild(link);
        link.click();
    })
}

export default fileLoad()