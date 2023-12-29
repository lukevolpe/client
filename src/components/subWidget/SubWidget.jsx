import './subWidget.css';

const SubWidget = () => {
  return (
    <div className='subWidgetContainer'>
      <h2 className='subWidgetTitle'>Save time, save money!</h2>
      <span className='subWidgetSubTitle'>
        Sign up and we'll send the best deals to you
      </span>
      <div className='emailForm'>
        <input type='email' placeholder='Your email address' />
        <button className='submit'>Subscribe</button>
      </div>
    </div>
  );
};

export default SubWidget;
