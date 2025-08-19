// Language data for internationalization
const languageData = {
    en: {
        // Page title and meta
        pageTitle: "Mappa Roma - Interactive Map of Rome",
        pageDescription: "Discover Rome's best attractions with our interactive map featuring 76+ landmarks, monuments, and hidden gems.",
        
        // Header and main UI
        siteTitle: "Mappa Roma",
        subtitle: "Discover the Eternal City",
        
        // Map provider toggles
        mapProvider: "Map Provider",
        mapboxLabel: "Mapbox",
        googleMapsLabel: "Google Maps",
        
        // Category filter
        categoryFilter: "Filter by Category",
        categories: {
            all: "All Places (76)",
            ancientSites: "Ancient Sites",
            vaticanReligious: "Vatican & Religious",
            fountainsSquares: "Fountains & Squares",
            museumsGalleries: "Museums & Galleries",
            parksGardens: "Parks & Gardens",
            neighborhoods: "Neighborhoods",
            hiddenGems: "Hidden Gems",
            footballVenues: "Football Venues"
        },
        
        // Match information
        upcomingMatches: "Upcoming Matches",
        menMatches: "Men's Matches",
        womenMatches: "Women's Matches",
        venue: "Venue",
        address: "Address",
        showOnMap: "Show on Map",
        noUpcomingMatches: "No upcoming matches scheduled",
        
        // Places counter
        placesShowing: "places showing",
        placesCounter: {
            singular: "place",
            plural: "places"
        },
        
        // Language switcher
        language: "Language",
        english: "English",
        italian: "Italiano",
        
        // Map controls
        zoomIn: "Zoom in",
        zoomOut: "Zoom out",
        resetView: "Reset view",
        
        // Error messages
        mapLoadError: "Error loading map. Please try again.",
        locationError: "Unable to access your location.",
        
        // Footer
        madeWith: "Made with",
        and: "and",
        forRome: "for Rome lovers"
    },
    
    it: {
        // Page title and meta
        pageTitle: "Mappa Roma - Mappa Interattiva di Roma",
        pageDescription: "Scopri le migliori attrazioni di Roma con la nostra mappa interattiva con oltre 76 monumenti, luoghi storici e gemme nascoste.",
        
        // Header and main UI
        siteTitle: "Mappa Roma",
        subtitle: "Scopri la Città Eterna",
        
        // Map provider toggles
        mapProvider: "Provider Mappa",
        mapboxLabel: "Mapbox",
        googleMapsLabel: "Google Maps",
        
        // Category filter
        categoryFilter: "Filtra per Categoria",
        categories: {
            all: "Tutti i Luoghi (76)",
            ancientSites: "Siti Antichi",
            vaticanReligious: "Vaticano e Religiosi",
            fountainsSquares: "Fontane e Piazze",
            museumsGalleries: "Musei e Gallerie",
            parksGardens: "Parchi e Giardini",
            neighborhoods: "Quartieri",
            hiddenGems: "Gemme Nascoste",
            footballVenues: "Impianti Calcistici"
        },
        
        // Match information
        upcomingMatches: "Prossime Partite",
        menMatches: "Partite Maschili",
        womenMatches: "Partite Femminili",
        venue: "Stadio",
        address: "Indirizzo",
        showOnMap: "Mostra sulla Mappa",
        noUpcomingMatches: "Nessuna partita in programma",
        
        // Places counter
        placesShowing: "luoghi visualizzati",
        placesCounter: {
            singular: "luogo",
            plural: "luoghi"
        },
        
        // Language switcher
        language: "Lingua",
        english: "English",
        italian: "Italiano",
        
        // Map controls
        zoomIn: "Ingrandisci",
        zoomOut: "Rimpicciolisci",
        resetView: "Ripristina vista",
        
        // Error messages
        mapLoadError: "Errore nel caricamento della mappa. Riprova.",
        locationError: "Impossibile accedere alla tua posizione.",
        
        // Footer
        madeWith: "Realizzato con",
        and: "e",
        forRome: "per gli amanti di Roma"
    }
};

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { languageData };
} else if (typeof window !== 'undefined') {
    window.languageData = languageData;
}