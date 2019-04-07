import React from 'react';
import { getNames } from 'country-list';
export const Country = getNames().map((country) => {
    return {
        country: country,
        value: country
    };
});