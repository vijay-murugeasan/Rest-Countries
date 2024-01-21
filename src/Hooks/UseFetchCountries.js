import { useEffect, useState } from "react";

export function UseFetchCountries() {
    const [countries, setCountries] = useState([]);
    // const [region, setRegion] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(function () {
        async function fetchCountries() {
            try {
                setIsLoading(true)
                setError("")
                const res = await fetch("https://restcountries.com/v3.1/all")
                if (!res.ok) throw new Error("Something Went Wrong While Fetching Countries");
                const data = await res.json();
                setCountries(data)
                setError("")
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.log(err.message);
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }

        }
        fetchCountries()
    }, [])

    return [countries, isLoading, error]

}


// export function SearchCountry(query) {

//     SearchedCountry = ""
//     if (query.length > 0) {


//     }
//     return SearchedCountry
// }



