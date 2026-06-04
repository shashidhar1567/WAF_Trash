import React from 'react';

function CountryRow(props)
 { render()
    {

    const country = props.country;

    return (

        <tr>

            <td>{country.id}</td>

            <td>{country.name}</td>

            <td>{country.capital}</td>

            <td>{country.population}</td>

            <td>{country.created.toDateString()}</td>

        </tr>

    );
}
}

export default CountryRow;