import { Outlet } from 'react-router-dom';

import HeaderMenu from '../../components/HeaderMenu';

const LayoutPage = () => {

    return(
        <>
        <HeaderMenu />
        <Outlet/>
        </>
    )
}


export default LayoutPage;