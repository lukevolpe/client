import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/api/hotels/countByCity?cities=Berlin,Madrid,London'
  );

  return (
    <div className='featured'>
      {loading ? (
        'Loading...please wait'
      ) : (
        <>
          <div className='featuredItem'>
            <img
              src='https://cf.bstatic.com/xdata/images/city/600x600/977262.jpg?k=2b852648c76ccaff8be05333057712eda873343dfaa79cd23e55534a1a55aecc&o='
              className='featuredImg'
            />
            <div className='featuredTitles'>
              <h1>London</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img
              src='https://cf.bstatic.com/xdata/images/city/600x600/976980.jpg?k=29c289ca126b54f55ca35b7c11393b93106a7305a44f60344028511a6d404092&o='
              className='featuredImg'
            />
            <div className='featuredTitles'>
              <h1>Manchester</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img
              src='https://cf.bstatic.com/xdata/images/city/600x600/976968.jpg?k=ecf327fd0b68cce554db317a5ed8bceda96dcf459880a55cea7251fbdd477043&o='
              className='featuredImg'
            />
            <div className='featuredTitles'>
              <h1>Liverpool</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
