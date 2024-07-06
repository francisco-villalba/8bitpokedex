import { Ground, Static } from './Screen.styles';
import imageSrc from '../../images/static-effect3.gif'

const Base = ( {children} ) => {
    return(
        <Ground>
            <Static src={imageSrc}/>
            {children}
        </Ground>
    );
}

export default Base;
