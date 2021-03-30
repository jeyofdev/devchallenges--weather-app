import Clear from '../assets/img/Clear.png';
import LightCloud from '../assets/img/LightCloud.png';
import LightRain from '../assets/img/LightRain.png';
import Shower from '../assets/img/Shower.png';
import Sleet from '../assets/img/Sleet.png';
import Snow from '../assets/img/Snow.png';
import Thunderstorm from '../assets/img/Thunderstorm.png';

const generateImage = (weather) => {
    let imgSrc = '';

    switch (weather) {
        case 'c':
            imgSrc = Clear;
            break;
        case 'lc':
            imgSrc = LightCloud;
            break;
        case 'hc':
            imgSrc = LightCloud;
            break;
        case 'lr':
            imgSrc = LightRain;
            break;
        case 's':
            imgSrc = Shower;
            break;
        case 'sl':
            imgSrc = Sleet;
            break;
        case 'sn':
            imgSrc = Snow;
            break;
        case 't':
            imgSrc = Thunderstorm;
            break;

        default:
            break;
    }

    return imgSrc;
};

export default generateImage;
