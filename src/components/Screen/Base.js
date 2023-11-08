import { Ground, Static } from './Screen.styles';

const Base = ( {children} ) => {
    return(
        <Ground>
            <Static src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGlycGhsYTBrdDNoN3V2eXE0OWc4ZTVqc3J0YzR4dGU5eTdyZmhlcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FOdT4x8rHYAqQ/giphy.gif"/>
            {children}
        </Ground>
    );
}

export default Base;
