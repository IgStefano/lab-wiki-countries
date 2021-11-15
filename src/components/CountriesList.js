import { Link } from 'react-router-dom';
import countries from '../countries.json';
import { useState } from 'react';

export default function CountriesList() {
  const [selected, setSelected] = useState('');

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((currentCountry) => {
          function changeColor() {
            setSelected(currentCountry.cca3);
          }

          return (
            <div key={currentCountry.cca3}>
              <Link
                onClick={changeColor}
                className={'list-group-item list-group-item-action'}
                style={{
                  backgroundColor:
                    selected === currentCountry.cca3 ? '#009CDA' : '',
                  color: selected === currentCountry.cca3 ? 'white' : '',
                }}
                to={currentCountry.cca3}
              >
                <img
                  className="me-2"
                  src={`https://flagcdn.com/28x21/${currentCountry.cca2.toLowerCase()}.png`}
                  alt={`Flag of ${currentCountry.name.common}`}
                />{' '}
                {currentCountry.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
