import React, { createContext, FC, useState } from "react";
import { CountryDetailsInterface } from "../interfaces/CountryInterface";

export const CountryContext = createContext<CountryDetailsInterface>(
    {} as CountryDetailsInterface
);

export const CountryProvider: FC = ({ children }) => {
    const [countryDetails, setCountryDetails] =
        useState<CountryDetailsInterface>({} as CountryDetailsInterface);

    return (
        <CountryContext.Provider
            value={{
                countryName: countryDetails.countryName,
                countryDetails: countryDetails.countryDetails,
                countryTemperature: countryDetails.countryTemperature,
            }}
        >
            {children}
        </CountryContext.Provider>
    );
};
