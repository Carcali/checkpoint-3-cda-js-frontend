import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '@/graphql/Countries';

// Définir un type pour un pays
interface Country {
  id: string;
  name: string;
  emoji: string;
  code: string;
}

// Définir le type des données retournées par la query
interface CountriesData {
  countries: Country[];
}

// Définir le type de l'erreur si la query échoue
interface CountriesError {
  message: string;
}

function Countries () {
  const { loading, error, data } = useQuery<CountriesData, CountriesError>(GET_COUNTRIES);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  if (!data || !data.countries) {
    return <p>Aucuns pays à afficher</p>;
  }

  return (
    <div className="countryList">
      <ul>
        {data?.countries.map((country) => (
          <li key={country.id} className="countryItem">
            <span className="countryEmoji">{country.emoji}</span>
            <span className="countryName">{country.name}</span>
            <span className="countryCode">{country.code}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;