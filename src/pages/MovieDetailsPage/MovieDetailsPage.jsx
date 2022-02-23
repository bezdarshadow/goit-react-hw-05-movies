import { Outlet } from 'react-router-dom';
import InfoAboutMovie from "../../components/InfoAboutMovie";

const MovieDetailsPage = () => {
    return(
        <>
        <InfoAboutMovie />
        <Outlet/>
        </>
    )
}

export default MovieDetailsPage;