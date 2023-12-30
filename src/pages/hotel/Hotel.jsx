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
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13255625.jpg?k=726c4a23e8c5bdfe14f1096a44020e65157d2c5ff0c2f9c46663d549b3dcd076&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/507825819.jpg?k=c245c82c43cb2a3d306896f066e091cbce03805f02846f787d3a5fdbbf0d12c5&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/169027528.jpg?k=35db92c3f282eadd4bfbdb3236410a1f5720b369d4c7693d973d4156d92bc0e7&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/279336712.jpg?k=200d462059764ce150e970c1067a2008dea950452fabd74273a0e438b96bc306&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13255656.jpg?k=c8fe049babf05681b1ffc1e66145d45dacd19c03b53006f271daa5fd80d8dca9&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247402159.jpg?k=7e689cd86abcb6bdd988dcb128325ff31c39e216caf15061d4bb8fa29965c9fb&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/13255538.jpg?k=6f342b222b76a0c42518e39a6f25dbe7fb3580aaf75a8b572a572bebe74077fe&o=&hp=1',
    },
  ];

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
              <img src={photos[slideNumber].src} className='sliderImg' />
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
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton Street 125 New York</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay for under £114 at this property and get a free airport
            taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo, index) => (
              <div className='hotelImgWrapper'>
                <img
                  src={photo.src}
                  onClick={() => handleOpen(index)}
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Stay in the heart of Krakow</h1>
              <p className='hotelDesc'>
                Set on the Strand, ME London by Melia overlooks the impressive
                Somerset House. With international fine dining, this elegant
                hotel offers the STK London and the Italian oriented restaurant
                Luciano by Gino D´Acampo . It is just 2 minutes’ walk from the
                River Thames, Covent Garden, Somerset House and Soho. Its Radio
                Rooftop Bar features panoramic views of London. With interiors
                designed by Foster and Partners, this innovative hotel has a
                cosmopolitan atmosphere and contemporary music. The rooms boast
                floor-to-ceiling windows with impressive views, an integrated
                media hub, and an LCD TV. The en suite bathrooms include a Bali
                shower. The rooms also boast free WiFi, 24-hour gym access and
                24-hour room service.
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Situated in the real heart of London, this hotel has an
                excellent location score of 9.5
              </span>
              <h2>
                <b>£945</b> (9 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <SubWidget />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
