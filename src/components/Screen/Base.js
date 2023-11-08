import { Ground, Static } from './Screen.styles';

const Base = ( {children} ) => {
    return(
        <Ground>
            <Static src="https://i.pinimg.com/originals/5a/bb/0a/5abb0ab7950f396f6887562051d5b0de.gif"/>
            {children}
        </Ground>
    );
}

export default Base;
