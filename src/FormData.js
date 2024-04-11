import React, { useState } from 'react';
import axios from 'axios'
const CompanyForm = () => {
  const [formData, setFormData] = useState({
    founded_at: '',
    closed_at: '',
    funding_rounds: '',
    funding_total_usd: '',
    country_code: '',
  });


  const countryOptions = ['USA', 'MAR', 'IND', 'AUS', 'FRA', 'JPN', 'NLD', 'EGY', 'ISR',
  'GBR', 'THA', 'CAN', 'AUT', 'IRL', 'SWE', 'DEU', 'BRA', 'FIN',
  'RUS', 'SGP', 'MEX', 'CHN', 'ESP', 'ISL', 'KOR', 'TUR', 'DNK',
  'ARG', 'PAK', 'HUN', 'POL', 'GRC', 'PRT', 'BLR', 'CSS', 'MKD',
  'CHE', 'SVN', 'UKR', 'ITA', 'NZL', 'LIE', 'NOR', 'CZE', 'VNM',
  'HRV', 'BEN', 'CHL', 'GHA', 'ZAF', 'MYS', 'EST', 'BEL', 'SVK',
  'TWN', 'CRI', 'HKG', 'BGD', 'BOL', 'LBN', 'LUX', 'AZE', 'COL',
  'PHL', 'ARE', 'IDN', 'ROM', 'ANT', 'CYM', 'NGA', 'GIN', 'CYP',
  'LKA', 'SWZ', 'VGB', 'MLT', 'SAU', 'KEN', 'BGR', 'PER', 'LVA',
  'LAO', 'NPL', 'MDA', 'CMR', 'UGA', 'TUN', 'URY', 'MUS', 'VEN',
  'OMN', 'ECU', 'KWT', 'JOR', 'LTU', 'ALB', 'QAT', 'UMI', 'PST',
  'REU', 'GTM', 'PCN', 'BHS', 'GEO', 'BWA', 'DZA', 'GRD', 'ZMB',
  'GIB', 'PAN', 'MTQ', 'PRI', 'BIH', 'DMA', 'BHR', 'SYC', 'SLE',
  'TTO', 'VCT', 'ARA', 'BRB', 'NAM', 'SLV', 'AFG', 'BLZ', 'UZB',
  'IRN', 'TZA', 'ARM', 'ATG', 'DOM', 'JAM', 'MDV', 'MMR', 'KAZ',
  'GLP', 'MAC', 'IOT', 'MDG', 'KGZ', 'VIR', 'ZWE', 'PRY', 'PRK',
  'LSO', 'SMR', 'IRQ', 'BMU', 'NRU', 'KHM', 'ETH', 'BDI', 'SEN',
  'HMI', 'HND', 'TJK', 'NER', 'NCL', 'CUB', 'FST', 'AGO', 'NFK',
  'NIC', 'AND', 'MCO', 'YEM', 'BRN', 'HTI', 'AIA', 'SUR', 'SYR',
  'SOM', 'RWA', 'CIV', 'SDN']; 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://pipeline-backend-1.onrender.com/predict', formData);
      alert(`${response.data}`);
      // Do something with the response if needed
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error
    }
    // Add your logic to send data to the backend here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Please provide the following...</h2>
      <label>
        Founded At:
        <input
          type="date"
          name="founded_at"
          value={formData.founded_at}
          onChange={handleChange}
        />
      </label>
      <label>
        Closed At:
        <input
          type="date"
          name="closed_at"
          value={formData.closed_at}
          min={formData.founded_at} // Set min attribute to ensure closed_at is always greater than founded_at
          onChange={handleChange}
        />
      </label>
      <label>
        Funding Rounds:
        <input
          type="number"
          name="funding_rounds"
          value={formData.funding_rounds}
          onChange={handleChange}
        />
      </label>
      <label>
        Funding Total(USD):
        <input
          type="number"
          step="0.01"
          name="funding_total_usd"
          value={formData.funding_total_usd}
          onChange={handleChange}
        />
      </label>
      <label>
        Country Code:
        <select name="country_code" value={formData.country_code} onChange={handleChange}>
          <option value="">Select Country Code</option>
          {/* Map over the countryOptions array to generate dropdown options */}
          {countryOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyForm;
