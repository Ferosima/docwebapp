import React from 'react';
import assetsData from '../../assets/assetsData';
import Button from '../../components/Button';
import './styles.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="row header">
          <p className="logo">docwebapp</p>
          <div className="row">
            <Button
              text="Home"
              onClick={() => {
                console.log('hi');
              }}
            />
            <Button
              text="Possibilites"
              onClick={() => {
                console.log('hi');
              }}
            />
            <Button
              text="Contact Us"
              onClick={() => {
                console.log('hi');
              }}
            />
            <Button
              text="Log in"
              className="button"
              onClick={() => {
                console.log('hi');
              }}
            />
          </div>
        </div>
        <div className="row" style={{ padding: '120px 30px' }}>
          <div className="column" style={{ width: '40%' }}>
            <p className="subtitle">Easy and convenient </p>
            <p className="title">Manager of your documents and signatures for your company </p>
            <Button
              text="Get started"
              className="button"
              style={{ marginTop: '10px' }}
              onClick={() => {
                console.log('hi');
              }}
            />
          </div>
          <div className="image" style={{ width: '40%' }}>
            <img style={{ width: '100%', height: '100%' }} src={assetsData.images[0]} alt="Docs" />
          </div>
        </div>
        <p className="title">Possibilites</p>
      </div>
    );
  }
}

export default HomePage;
