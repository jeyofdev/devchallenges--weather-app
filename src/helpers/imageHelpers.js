import Snow from '../assets/img/Snow.png';
import Sleet from '../assets/img/Sleet.png';
import Hail from '../assets/img/Hail.png';
import Thunderstorm from '../assets/img/Thunderstorm.png';
import HeavyRain from '../assets/img/HeavyRain.png';
import LightRain from '../assets/img/LightRain.png';
import Shower from '../assets/img/Shower.png';
import HeavyCloud from '../assets/img/HeavyCloud.png';
import LightCloud from '../assets/img/LightCloud.png';
import Clear from '../assets/img/Clear.png';

const generateImage = (weather) => {
    let imgSrc = '';

    switch (weather) {
        case 'sn':
            imgSrc = Snow;
            break;
        case 'sl':
            imgSrc = Sleet;
            break;
        case 'h':
            imgSrc = Hail;
            break;
        case 't':
            imgSrc = Thunderstorm;
            break;
        case 'hr':
            imgSrc = HeavyRain;
            break;
        case 'lr':
            imgSrc = LightRain;
            break;
        case 's':
            imgSrc = Shower;
            break;
        case 'hc':
            imgSrc = HeavyCloud;
            break;
        case 'lc':
            imgSrc = LightCloud;
            break;
        case 'c':
            imgSrc = Clear;
            break;

        default:
            imgSrc = Clear;
            break;
    }

    return imgSrc;
};

export default generateImage;
