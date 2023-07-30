import { toAbsoluteUrl } from "../../../../../../../_metronic/helpers"

const PointListHeader = () => {
  return (
    <ul
      className='nav nav-pills d-flex justify-content-between nav-pills-custom gap-3 mb-6'
      role='tablist'
    >
      <li className='nav-item mb-3 me-0' role='presentation'>
        <a
          className='nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg show active'
          data-bs-toggle='pill'
          href='#kt_pos_food_content_1'
          style={{width: '138px', height: '180px'}}
          aria-selected='true'
          role='tab'
        >
          <div className='nav-icon mb-3'>
            <img
              src={toAbsoluteUrl('/media/svg/food-icons/spaghetti.svg')}
              className='w-50px'
              alt=''
            />
          </div>
          <div className=''>
            <span className='text-gray-800 fw-bold fs-2 d-block'>Lunch</span>
            <span className='text-gray-400 fw-semibold fs-7'>8 Options</span>
          </div>
        </a>
      </li>
      <li className='nav-item mb-3 me-0' role='presentation'>
        <a
          className='nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg '
          data-bs-toggle='pill'
          href='#kt_pos_food_content_2'
          style={{width: '138px', height: '180px'}}
          aria-selected='false'
          tabIndex={-1}
          role='tab'
        >
          <div className='nav-icon mb-3'>
            <img src={toAbsoluteUrl('/media/svg/food-icons/salad.svg')} className='w-50px' alt='' />
          </div>
          <div className=''>
            <span className='text-gray-800 fw-bold fs-2 d-block'>Salad</span>
            <span className='text-gray-400 fw-semibold fs-7'>14 Salads</span>
          </div>
        </a>
      </li>
      <li className='nav-item mb-3 me-0' role='presentation'>
        <a
          className='nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg '
          data-bs-toggle='pill'
          href='#kt_pos_food_content_3'
          style={{width: '138px', height: '180px'}}
          aria-selected='false'
          tabIndex={-1}
          role='tab'
        >
          <div className='nav-icon mb-3'>
            <img
              src={toAbsoluteUrl('/media/svg/food-icons/cheeseburger.svg')}
              className='w-50px'
              alt=''
            />
          </div>
          <div className=''>
            <span className='text-gray-800 fw-bold fs-2 d-block'>Burger</span>
            <span className='text-gray-400 fw-semibold fs-7'>5 Burgers</span>
          </div>
        </a>
      </li>
      <li className='nav-item mb-3 me-0' role='presentation'>
        <a
          className='nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg '
          data-bs-toggle='pill'
          href='#kt_pos_food_content_4'
          style={{width: '138px', height: '180px'}}
          aria-selected='false'
          tabIndex={-1}
          role='tab'
        >
          <div className='nav-icon mb-3'>
            <img
              src={toAbsoluteUrl('/media/svg/food-icons/coffee.svg')}
              className='w-50px'
              alt=''
            />
          </div>
          <div className=''>
            <span className='text-gray-800 fw-bold fs-2 d-block'>Coffee</span>
            <span className='text-gray-400 fw-semibold fs-7'>7 Beverages</span>
          </div>
        </a>
      </li>
      <li className='nav-item mb-3 me-0' role='presentation'>
        <a
          className='nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg '
          data-bs-toggle='pill'
          href='#kt_pos_food_content_5'
          style={{width: '138px', height: '180px'}}
          aria-selected='false'
          tabIndex={-1}
          role='tab'
        >
          <div className='nav-icon mb-3'>
            <img
              src={toAbsoluteUrl('/media/svg/food-icons/cheesecake.svg')}
              className='w-50px'
              alt=''
            />
          </div>
          <div className=''>
            <span className='text-gray-800 fw-bold fs-2 d-block'>Dessert</span>
            <span className='text-gray-400 fw-semibold fs-7'>8 Desserts</span>
          </div>
        </a>
      </li>
    </ul>
  )
}

export {PointListHeader}
