import Form from "@/components/Form";
import Countries from "@/components/Countries";
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '@/graphql/Countries';

export interface Continent {
  id: string;
  name: string;
}

export interface Country {
  id: string;
  name: string;
  emoji: string;
  code: string;
  continent: Continent;
}

export default function Home() {
  const { loading, error, data } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  if (!data || !data.countries || data.countries.length === 0) {
    return <p>No countries found.</p>;
  }

  return (
    <>
      <div className="countriesContainer">
        {data.countries.map((country: Country) => (
          <CountryButton key={country.id} id={country.id} name={country.name} countryFlag={country.emoji} />
        ))}
      </div>
    </>
  );
}
