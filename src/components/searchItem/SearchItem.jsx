import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square200/409974326.webp?k=375d5b683d8f555a6aa7d1bd7a38099f522ba3bd429f497bb29139391e17927f&o='
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Tower Street Apartments</h1>
        <span className='siDistance'>500m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>
          Studio apartment with Air conditioning
        </span>
        <span className='siFeatures'>
          Entire apartment • 1 bedroom • 1 bathroom • 1 kitchen • 484.4feet²
        </span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className='siDetailTexts'>
          <span className='siPrice'>£123</span>
          <span className='siTaxOp'>Includes taxes and charges</span>
          <button className='siCheckButton'>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
