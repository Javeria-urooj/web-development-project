import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Seller(props) {
  const { seller } = props;
  return (
    <div key={seller._id} className="card">
      <Link to={`/seller/${seller._id}`}>
        <img className="medium" src="/uploads\seller.png" alt={seller.name} />
      </Link>
      <div className="card-body">
        <Link to={`/seller/${seller._id}`}>
          <h2 className="center-text">{seller.name}</h2>
        </Link>
        
      </div>
    </div>
  );
}
