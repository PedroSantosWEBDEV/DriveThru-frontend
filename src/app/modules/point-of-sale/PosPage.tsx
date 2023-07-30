import {Route, Routes, Outlet} from 'react-router-dom'
import {useIntl} from 'react-intl'

import {PageTitle} from '../../../_metronic/layout/core'
import { PointListWrapper } from './components/point-list/PointList'

const PosPage = () => {
    const intl = useIntl()

    return (
        <Routes>
            <Route element={<Outlet />}>
            <Route
                    path='/'
                    element={
                        <>
                             <PageTitle>{intl.formatMessage({id: 'MENU.POS'})}</PageTitle>
                             {/* {!client.mutateAsync()} */}
                            <PointListWrapper />
                        </>
                    }
                />
            </Route>
        </Routes>
    )
}

export default PosPage