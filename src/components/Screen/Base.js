import { Ground, Static } from './Screen.styles';

const Base = ( {children} ) => {
    return(
        <Ground>
            <Static src="https://thumbs.gfycat.com/HappygoluckyPolishedHartebeest-size_restricted.gif"/>
            {children}
        </Ground>
    );
}

export default Base;