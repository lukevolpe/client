import useFetch from '../../hooks/useFetch';
import './homesGuestsLove.css';

const HomesGuestsLove = () => {
  const { data, loading, error } = useFetch(
    '/api/hotels?featured=true&limit=4'
  );

  return (
    <div className='homesGuestsLove'>
      {loading ? (
        'Loading...'
      ) : (
        <>
          {data.map((item) => (
            <div className='glItem' key={item._id}>
              <img src={item.photos[0]} className='glImg' />
              <span className='glName'>{item.name}</span>
              <span className='glCity'>{item.city}</span>
              <span className='glPrice'>
                Starting from £{item.cheapestPrice}
              </span>
              {item.rating && (
                <div className='glRating'>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default HomesGuestsLove;
