export interface CountryDetailsInterface {
    countryName: String;
    countryDetails: {
        capital: String;
        population: String;
        latlng: String;
        flag: String;
    };
    countryTemperature: {
        temperature: String;
        weather_icons: String;
        wind_speed: String;
        precip: String;
    };
}
