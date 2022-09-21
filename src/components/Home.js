import React from 'react';
import '../style/Home.css';

const displayPara = 'Lorem ipsum dolor sit amet. Et galisum praesentium et magnam dolor et enim officiis in impedit omnis qui dicta mollitia. Et sint tenetur vel porro veniam ut rerum voluptas non omnis illo et dolores dolor. Eum quibusdam deleniti est alias itaque aut laudantium reiciendis.';
const Home = () => (
  <div>
    <section className="Home">
      <h1>Welcome to our Home Page!</h1>
      <p>{displayPara}</p>
      <p>{displayPara}</p>
    </section>
    <footer>
      <p className="footer">Designed by Abdulrahman Nganje</p>
    </footer>
  </div>
);

export default Home;
