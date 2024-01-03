import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css';
import {
  faChevronLeft,
  faChevronRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import SubWidget from '../../components/subWidget/SubWidget';
import Footer from '../../components/footer/Footer';
import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error, reFetch } = useFetch(`/api/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);

  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? (
        'Loading...'
      ) : (
        <div className='hotelContainer'>
          {open && (
            <div className='slider'>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className='close'
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faChevronLeft}
                className='arrow'
                onClick={() => handleMove('left')}
              />
              <div className='sliderWrapper'>
                <img src={data.photos[slideNumber]} className='sliderImg' />
              </div>
              <FontAwesomeIcon
                icon={faChevronRight}
                className='arrow'
                onClick={() => handleMove('right')}
              />
            </div>
          )}
          <div className='hotelWrapper'>
            <button className='bookNow'>Reserve or Book now!</button>
            <h1 className='hotelTitle'>{data.name}</h1>
            <div className='hotelAddress'>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className='hotelDistance'>
              Excellent location - {data.distance} from center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay for under £{data.cheapestPrice} at this property and
              get a free airport taxi
            </span>
            <div className='hotelImages'>
              {data.photos?.map((photo, index) => (
                <div className='hotelImgWrapper'>
                  <img
                    src={photo}
                    onClick={() => handleOpen(index)}
                    className='hotelImg'
                  />
                </div>
              ))}
            </div>
            <div className='hotelDetails'>
              <div className='hotelDetailsTexts'>
                <h1 className='hotelTitle'>{data.title}</h1>
                <p className='hotelDesc'>{data.description}</p>
              </div>
              <div className='hotelDetailsPrice'>
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Situated in the real heart of London, this hotel has an
                  excellent location score of 9.5
                </span>
                <h2>
                  <b>£{days * data.cheapestPrice * options.room}</b> ({days}{' '}
                  nights)
                </h2>
                <button>Reserve or Book now!</button>
              </div>
            </div>
          </div>
          <SubWidget />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
