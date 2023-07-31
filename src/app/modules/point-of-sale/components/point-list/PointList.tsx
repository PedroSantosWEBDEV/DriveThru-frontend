import {useIntl} from 'react-intl'
import {QueryRequestProvider} from '../core/QueryRequestProvider'
import {QueryResponseProvider} from '../core/QueryResponseProvider'
import {ListViewProvider} from '../core/ListViewProvider'
import {KTCard, KTCardBody, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {PointListHeader} from './components/header/PointListHeader'

const PointList = () => {
  // debugger;
  const intl = useIntl()

  return (
    <>
      <KTCard className='app-container container-xxl'>
        <div className='d-flex flex-column flex-xl-row'>
          <div className='d-flex flex-row-fluid me-xl-9 mb-10 mb-xl-0'>
            <div className='card card-flush card-p-0 bg-transparent border-0 '>
            <div className="card-body">   
                <PointListHeader />
                <div className='tab-content'>
                  {/*<!--begin::Tap pane-->*/}
                  <div
                    className='tab-pane fade show active'
                    id='kt_pos_food_content_1'
                    role='tabpanel'
                  >
                    {/*<!--begin::Wrapper-->*/}
                    <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-2.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                T-Bone Stake
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$16.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-7.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chef’s Salmon
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$12.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-8.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Ramen
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$14.90$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-4.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chicken Breast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$9.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-10.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Tenderlion Steak
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$19.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-9.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Soup of the Day
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$7.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-3.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Pancakes
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-5.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Breakfast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-11.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Sweety
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}
                    </div>
                    {/*<!--end::Wrapper-->*/}
                  </div>
                  <div className='tab-pane fade ' id='kt_pos_food_content_2' role='tabpanel'>
                    {/*<!--begin::Wrapper-->*/}
                    <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-11.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Sweety
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-5.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Breakfast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-4.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chicken Breast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$9.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-8.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Ramen
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$14.90$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-10.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Tenderlion Steak
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$19.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-9.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Soup of the Day
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$7.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-3.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Pancakes
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-7.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chef’s Salmon
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$12.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-2.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                T-Bone Stake
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$16.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}
                    </div>
                    {/*<!--end::Wrapper-->*/}
                  </div>
                  {/*<!--end::Tap pane-->*/}

                  {/*<!--begin::Tap pane-->*/}
                  <div className='tab-pane fade ' id='kt_pos_food_content_3' role='tabpanel'>
                    {/*<!--begin::Wrapper-->*/}
                    <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-5.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Breakfast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-11.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Sweety
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-2.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                T-Bone Stake
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$16.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-7.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chef’s Salmon
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$12.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-4.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chicken Breast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$9.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-8.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Ramen
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$14.90$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-9.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Soup of the Day
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$7.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-10.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Tenderlion Steak
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$19.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-3.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Pancakes
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}
                    </div>
                    {/*<!--end::Wrapper-->*/}
                  </div>
                  {/*<!--end::Tap pane-->*/}

                  {/*<!--begin::Tap pane-->*/}
                  <div className='tab-pane fade ' id='kt_pos_food_content_4' role='tabpanel'>
                    {/*<!--begin::Wrapper-->*/}
                    <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-3.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Pancakes
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-5.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Breakfast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-4.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chicken Breast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$9.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-8.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Ramen
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$14.90$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-9.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Soup of the Day
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$7.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-11.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Sweety
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-3.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Pancakes
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-7.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chef’s Salmon
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$12.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-10.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Tenderlion Steak
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$19.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}
                    </div>
                    {/*<!--end::Wrapper-->*/}
                  </div>
                  {/*<!--end::Tap pane-->*/}

                  {/*<!--begin::Tap pane-->*/}
                  <div className='tab-pane fade ' id='kt_pos_food_content_5' role='tabpanel'>
                    {/*<!--begin::Wrapper-->*/}
                    <div className='d-flex flex-wrap d-grid gap-5 gap-xxl-9'>
                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-10.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Tenderlion Steak
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$19.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-5.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Breakfast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$8.20$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-4.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chicken Breast
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$9.00$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-3.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Pancakes
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$6.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-2.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                T-Bone Stake
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$16.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-7.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Chef’s Salmon
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$12.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-8.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Ramen
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$14.90$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-9.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Soup of the Day
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$7.50$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}

                      {/*<!--begin::Card-->*/}
                      <div className='card card-flush flex-row-fluid p-6 pb-5 mw-100'>
                        {/*<!--begin::Body-->*/}
                        <div className='card-body text-center'>
                          {/*<!--begin::Food img-->*/}
                          <img
                            src={toAbsoluteUrl('/media/stock/food/img-11.jpg')}
                            className='rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px'
                            alt=''
                          />
                          {/*<!--end::Food img-->*/}

                          {/*<!--begin::Info-->*/}
                          <div className='mb-2'>
                            {/*<!--begin::Title-->*/}
                            <div className='text-center'>
                              <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1'>
                                Sweety
                              </span>

                              <span className='text-gray-400 fw-semibold d-block fs-6 mt-n1'>
                                16 mins to cook
                              </span>
                            </div>
                            {/*<!--end::Title-->*/}
                          </div>
                          {/*<!--end::Info-->*/}

                          {/*<!--begin::Total-->*/}
                          <span className='text-success text-end fw-bold fs-1'>$11.40$</span>
                          {/*<!--end::Total-->*/}
                        </div>
                        {/*<!--end::Body-->*/}
                      </div>
                      {/*<!--end::Card-->*/}
                    </div>
                    {/*<!--end::Wrapper-->*/}
                  </div>
                  {/*<!--end::Tap pane-->*/}
                </div>
              </div>
            </div>
          </div>
          <div className='flex-row-auto w-xl-450px'>
            <div className='card card-flush bg-body ' id='kt_pos_form'>
              <div className='card-header pt-5'>
                <h3 className='card-title fw-bold text-gray-800 fs-2qx'>Current Order</h3>

                <div className='card-toolbar'>
                  <a href='#' className='btn btn-light-primary fs-4 fw-bold py-4'>
                    Clear All
                  </a>
                </div>
              </div>

              <div className='card-body pt-0'>
                <div className='table-responsive mb-8'>
                  <table className='table align-middle gs-0 gy-4 my-0'>
                    <thead>
                      <tr>
                        <th className='min-w-175px'></th>
                        <th className='w-125px'></th>
                        <th className='w-60px'></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr data-kt-pos-element='item' data-kt-pos-item-price='33'>
                        <td className='pe-0'>
                          <div className='d-flex align-items-center'>
                            <img
                              src='/metronic8/demo1/assets/media/stock/food/img-2.jpg'
                              className='w-50px h-50px rounded-3 me-3'
                              alt=''
                            />
                            <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1'>
                              T-Bone Stake
                            </span>
                          </div>
                        </td>

                        <td className='pe-0'>
                          <div
                            className='position-relative d-flex align-items-center'
                            data-kt-dialer='true'
                            data-kt-dialer-min='1'
                            data-kt-dialer-max='10'
                            data-kt-dialer-step='1'
                            data-kt-dialer-decimals='0'
                          >
                            <button
                              type='button'
                              className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                              data-kt-dialer-control='decrease'
                            >
                              <i className='ki-duotone ki-minus fs-3x'></i>
                            </button>

                            <input
                              type='text'
                              className='form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px'
                              data-kt-dialer-control='input'
                              placeholder='Amount'
                              name='manageBudget'
                              readOnly
                              value='2'
                            />

                            <button
                              type='button'
                              className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                              data-kt-dialer-control='increase'
                            >
                              <i className='ki-duotone ki-plus fs-3x'></i>
                            </button>
                          </div>
                        </td>

                        <td className='text-end'>
                          <span
                            className='fw-bold text-primary fs-2'
                            data-kt-pos-element='item-total'
                          >
                            $66.00
                          </span>
                        </td>
                      </tr>
                      <tr data-kt-pos-element='item' data-kt-pos-item-price='7.5'>
                        <td className='pe-0'>
                          <div className='d-flex align-items-center'>
                            <img
                              src='/metronic8/demo1/assets/media/stock/food/img-9.jpg'
                              className='w-50px h-50px rounded-3 me-3'
                              alt=''
                            />
                            <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1'>
                              Soup of the Day
                            </span>
                          </div>
                        </td>

                        <td className='pe-0'>
                          <div
                            className='position-relative d-flex align-items-center'
                            data-kt-dialer='true'
                            data-kt-dialer-min='1'
                            data-kt-dialer-max='10'
                            data-kt-dialer-step='1'
                            data-kt-dialer-decimals='0'
                          >
                            <button
                              type='button'
                              className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                              data-kt-dialer-control='decrease'
                            >
                              <i className='ki-duotone ki-minus fs-3x'></i>
                            </button>

                            <input
                              type='text'
                              className='form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px'
                              data-kt-dialer-control='input'
                              placeholder='Amount'
                              name='manageBudget'
                              readOnly
                              value='1'
                            />

                            <button
                              type='button'
                              className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                              data-kt-dialer-control='increase'
                            >
                              <i className='ki-duotone ki-plus fs-3x'></i>
                            </button>
                          </div>
                        </td>

                        <td className='text-end'>
                          <span
                            className='fw-bold text-primary fs-2'
                            data-kt-pos-element='item-total'
                          >
                            $7.50
                          </span>
                        </td>
                      </tr>
                      <tr data-kt-pos-element='item' data-kt-pos-item-price='13.5'>
                        <td className='pe-0'>
                          <div className='d-flex align-items-center'>
                            <img
                              src='/metronic8/demo1/assets/media/stock/food/img-3.jpg'
                              className='w-50px h-50px rounded-3 me-3'
                              alt=''
                            />
                            <span className='fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1'>
                              Pancakes
                            </span>
                          </div>
                        </td>

                        <td className='pe-0'>
                          <div
                            className='position-relative d-flex align-items-center'
                            data-kt-dialer='true'
                            data-kt-dialer-min='1'
                            data-kt-dialer-max='10'
                            data-kt-dialer-step='1'
                            data-kt-dialer-decimals='0'
                          >
                            <button
                              type='button'
                              className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                              data-kt-dialer-control='decrease'
                            >
                              <i className='ki-duotone ki-minus fs-3x'></i>
                            </button>

                            <input
                              type='text'
                              className='form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px'
                              data-kt-dialer-control='input'
                              placeholder='Amount'
                              name='manageBudget'
                              readOnly
                              value='2'
                            />

                            <button
                              type='button'
                              className='btn btn-icon btn-sm btn-light btn-icon-gray-400'
                              data-kt-dialer-control='increase'
                            >
                              <i className='ki-duotone ki-plus fs-3x'></i>
                            </button>
                          </div>
                        </td>

                        <td className='text-end'>
                          <span
                            className='fw-bold text-primary fs-2'
                            data-kt-pos-element='item-total'
                          >
                            $27.00
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='d-flex flex-stack bg-success rounded-3 p-6 mb-11'>
                  <div className='fs-6 fw-bold text-white'>
                    <span className='d-block lh-1 mb-2'>Subtotal</span>
                    <span className='d-block mb-2'>Discounts</span>
                    <span className='d-block mb-9'>Tax(12%)</span>
                    <span className='d-block fs-2qx lh-1'>Total</span>
                  </div>

                  <div className='fs-6 fw-bold text-white text-end'>
                    <span className='d-block lh-1 mb-2' data-kt-pos-element='total'>
                      $100.50
                    </span>
                    <span className='d-block mb-2' data-kt-pos-element='discount'>
                      -$8.00
                    </span>
                    <span className='d-block mb-9' data-kt-pos-element='tax'>
                      $11.20
                    </span>
                    <span className='d-block fs-2qx lh-1' data-kt-pos-element='grant-total'>
                      $93.46
                    </span>
                  </div>
                </div>

                <div className='m-0'>
                  <h1 className='fw-bold text-gray-800 mb-5'>Payment Method</h1>

                  <div
                    className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-12'
                    data-kt-buttons='true'
                    data-kt-buttons-target='[data-kt-button]'
                    data-kt-initialized='1'
                  >
                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 '
                      data-kt-button='true'
                    >
                      <input className='btn-check' type='radio' name='method' value='0' />

                      <i className='ki-duotone ki-dollar fs-2hx mb-2 pe-0'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                        <span className='path3'></span>
                      </i>

                      <span className='fs-7 fw-bold d-block'>Cash</span>
                    </label>

                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 active'
                      data-kt-button='true'
                    >
                      <input className='btn-check' type='radio' name='method' value='1' />

                      <i className='ki-duotone ki-credit-cart fs-2hx mb-2 pe-0'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>

                      <span className='fs-7 fw-bold d-block'>Card</span>
                    </label>

                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 border border-3 border-gray-100 border-active-primary btn-active-light-primary w-100 px-4 '
                      data-kt-button='true'
                    >
                      <input className='btn-check' type='radio' name='method' value='2' />

                      <i className='ki-duotone ki-paypal fs-2hx mb-2 pe-0'>
                        <span className='path1'></span>
                        <span className='path2'></span>
                      </i>

                      <span className='fs-7 fw-bold d-block'>E-Wallet</span>
                    </label>
                  </div>

                  <button className='btn btn-primary fs-1 w-100 py-4'>Print Bills</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </KTCard>
    </>
  )
}

const PointListWrapper = () => {
  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ListViewProvider>
          <PointList />
        </ListViewProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  )
}

export {PointListWrapper}
