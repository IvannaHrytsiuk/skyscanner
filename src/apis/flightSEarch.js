// eslint-disable-next-line import/no-mutable-exports
export let searchAirportList;

export const FlightSearchClass = class {
    async getListPlaces() {
        try {
            this.res = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm', {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                    'x-rapidapi-key': 'd40f871e56msh6454e5315fba4b0p1d7c22jsnb8c09fe2a985',
                },
            });
            this.data = await this.res.json();
            if (this.data) {
                // country = this.data;
            } else {
                throw Error(this.data.Message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAirports(id) {
        try {
            this.res = await fetch(`http://localhost:3000/airportName/${id}`);
            this.data = await this.res.json();
            searchAirportList = this.data;
        } catch (error) {
            console.log(error);
        }
    }
};
