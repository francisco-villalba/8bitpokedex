import { useContext } from 'react';
import { AppContext } from '../../context';
import NotFoundScreen from './404Screen';
import Base from './Base';
import ContentScreen from './ContentScreen';
import LoadingScreen from './LoadingScreen';

const Screen = () => {
    const {data, loading} = useContext(AppContext)
    
    if(data.error) {
        return <NotFoundScreen />
    }
    
    else if(loading) {
        return <LoadingScreen />
    }

    else if(data.name) {
        return <ContentScreen />
    }

    else {
        return <Base />
    }
}

export default Screen;