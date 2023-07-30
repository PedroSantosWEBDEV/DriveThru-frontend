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
      <KTCard>
        <div className='d-flex flex-column flex-xl-row'>
          <div className='card card-flush card-p-0 bg-transparent border-0 '>
            <KTCardBody>
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
            </KTCardBody>
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
