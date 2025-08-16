// Comprehensive data for 70 best Rome places with coordinates and descriptions
const romePlaces = [
  // Major Ancient Sites
  {
    id: 1,
    name: "Colosseum",
    lat: 41.8902,
    lng: 12.4922,
    category: "Ancient Sites",
    description: "Iconic Roman amphitheatre where gladiators fought, built in 72-80 AD",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 2,
    name: "Roman Forum",
    lat: 41.8925,
    lng: 12.4853,
    category: "Ancient Sites",
    description: "Heart of ancient Rome with temples, basilicas and government buildings",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400"
  },
  {
    id: 3,
    name: "Pantheon",
    lat: 41.8986,
    lng: 12.4769,
    category: "Ancient Sites",
    description: "Best-preserved Roman building with magnificent concrete dome",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400"
  },
  {
    id: 4,
    name: "Palatine Hill",
    lat: 41.8888,
    lng: 12.4874,
    category: "Ancient Sites",
    description: "Legendary birthplace of Rome with imperial palace ruins",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 5,
    name: "Baths of Caracalla",
    lat: 41.8776,
    lng: 12.4934,
    category: "Ancient Sites",
    description: "Massive ancient Roman public baths complex from 212 AD",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 6,
    name: "Circus Maximus",
    lat: 41.8864,
    lng: 12.4854,
    category: "Ancient Sites",
    description: "Ancient Roman chariot racing stadium, largest ever built",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 7,
    name: "Castel Sant'Angelo",
    lat: 41.9031,
    lng: 12.4663,
    category: "Ancient Sites",
    description: "Hadrian's Mausoleum, later papal fortress and castle",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 8,
    name: "Capitoline Hill",
    lat: 41.8930,
    lng: 12.4828,
    category: "Ancient Sites",
    description: "Smallest of Rome's seven hills, designed by Michelangelo",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 9,
    name: "Theatre of Marcellus",
    lat: 41.8916,
    lng: 12.4781,
    category: "Ancient Sites",
    description: "Ancient Roman theatre, model for the Colosseum",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 10,
    name: "Domus Aurea",
    lat: 41.8906,
    lng: 12.4969,
    category: "Ancient Sites",
    description: "Nero's Golden House with stunning frescoes",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Vatican & Religious Sites
  {
    id: 11,
    name: "St. Peter's Basilica",
    lat: 41.9022,
    lng: 12.4539,
    category: "Religious Sites",
    description: "Renaissance church designed by Bramante, Michelangelo, and Bernini",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 12,
    name: "Sistine Chapel",
    lat: 41.9029,
    lng: 12.4545,
    category: "Religious Sites",
    description: "Famous for Michelangelo's ceiling and papal conclaves",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 13,
    name: "Vatican Museums",
    lat: 41.9065,
    lng: 12.4536,
    category: "Museums",
    description: "World's greatest art collection including Raphael Rooms",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 14,
    name: "St. Peter's Square",
    lat: 41.9022,
    lng: 12.4574,
    category: "Squares",
    description: "Bernini's magnificent colonnade embracing St. Peter's",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 15,
    name: "Santa Maria Maggiore",
    lat: 41.8976,
    lng: 12.4982,
    category: "Religious Sites",
    description: "Major papal basilica with beautiful mosaics",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 16,
    name: "San Giovanni in Laterano",
    lat: 41.8859,
    lng: 12.5056,
    category: "Religious Sites",
    description: "Cathedral of Rome and mother church of all Catholics",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 17,
    name: "Santa Maria in Trastevere",
    lat: 41.8891,
    lng: 12.4692,
    category: "Religious Sites",
    description: "Beautiful medieval church with golden mosaics",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 18,
    name: "San Clemente Basilica",
    lat: 41.8874,
    lng: 12.4972,
    category: "Religious Sites",
    description: "Three-level church showing 2000 years of history",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 19,
    name: "Santa Maria sopra Minerva",
    lat: 41.8958,
    lng: 12.4766,
    category: "Religious Sites",
    description: "Only Gothic church in Rome with Michelangelo sculpture",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 20,
    name: "San Paolo fuori le Mura",
    lat: 41.8583,
    lng: 12.4767,
    category: "Religious Sites",
    description: "One of four papal basilicas, burial place of St. Paul",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Fountains & Squares
  {
    id: 21,
    name: "Trevi Fountain",
    lat: 41.9009,
    lng: 12.4833,
    category: "Fountains",
    description: "Baroque masterpiece where coins ensure return to Rome",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 22,
    name: "Piazza Navona",
    lat: 41.8992,
    lng: 12.4731,
    category: "Squares",
    description: "Baroque square with Bernini's Fountain of Four Rivers",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 23,
    name: "Spanish Steps",
    lat: 41.9058,
    lng: 12.4823,
    category: "Squares",
    description: "Elegant 18th-century staircase connecting two levels",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 24,
    name: "Piazza di Spagna",
    lat: 41.9058,
    lng: 12.4823,
    category: "Squares",
    description: "Elegant square at the foot of Spanish Steps",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 25,
    name: "Piazza Venezia",
    lat: 41.8955,
    lng: 12.4823,
    category: "Squares",
    description: "Central square dominated by Victor Emmanuel Monument",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 26,
    name: "Fountain of Four Rivers",
    lat: 41.8992,
    lng: 12.4731,
    category: "Fountains",
    description: "Bernini's masterpiece representing four continents",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 27,
    name: "Piazza del Popolo",
    lat: 41.9109,
    lng: 12.4761,
    category: "Squares",
    description: "Large oval square with Egyptian obelisk and twin churches",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 28,
    name: "Campo de' Fiori",
    lat: 41.8955,
    lng: 12.4723,
    category: "Squares",
    description: "Lively square with morning market and nightlife",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 29,
    name: "Piazza della Rotonda",
    lat: 41.8986,
    lng: 12.4769,
    category: "Squares",
    description: "Charming square in front of the Pantheon",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 30,
    name: "Fontana della Barcaccia",
    lat: 41.9058,
    lng: 12.4823,
    category: "Fountains",
    description: "Bernini's boat-shaped fountain at Spanish Steps",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Museums & Galleries
  {
    id: 31,
    name: "Capitoline Museums",
    lat: 41.8930,
    lng: 12.4828,
    category: "Museums",
    description: "World's oldest public museums with ancient Roman statues",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 32,
    name: "Borghese Gallery",
    lat: 41.9146,
    lng: 12.4926,
    category: "Museums",
    description: "Stunning villa with Bernini sculptures and Caravaggio paintings",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 33,
    name: "Palazzo Massimo",
    lat: 41.9007,
    lng: 12.4977,
    category: "Museums",
    description: "National Roman Museum with exceptional ancient frescoes",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 34,
    name: "Palazzo Altemps",
    lat: 41.9014,
    lng: 12.4742,
    category: "Museums",
    description: "Renaissance palace housing ancient Roman sculptures",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 35,
    name: "Palazzo Doria Pamphilj",
    lat: 41.8978,
    lng: 12.4794,
    category: "Museums",
    description: "Private palace with Velázquez portrait of Pope Innocent X",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 36,
    name: "Crypta Balbi",
    lat: 41.8944,
    lng: 12.4778,
    category: "Museums",
    description: "Archaeological site showing medieval Rome transformation",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 37,
    name: "MAXXI Museum",
    lat: 41.9333,
    lng: 12.4722,
    category: "Museums",
    description: "Zaha Hadid's contemporary art and architecture museum",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 38,
    name: "Centrale Montemartini",
    lat: 41.8750,
    lng: 12.4833,
    category: "Museums",
    description: "Ancient sculptures displayed in former power plant",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Parks & Gardens
  {
    id: 39,
    name: "Villa Borghese",
    lat: 41.9146,
    lng: 12.4926,
    category: "Parks",
    description: "Large landscaped park with museums and lake",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 40,
    name: "Orange Garden (Giardino degli Aranci)",
    lat: 41.8833,
    lng: 12.4806,
    category: "Parks",
    description: "Peaceful garden on Aventine Hill with Rome views",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 41,
    name: "Villa Giulia",
    lat: 41.9167,
    lng: 12.4778,
    category: "Museums",
    description: "Etruscan Museum in beautiful Renaissance villa",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 42,
    name: "Villa Celimontana",
    lat: 41.8861,
    lng: 12.4944,
    category: "Parks",
    description: "Quiet park on Caelian Hill with jazz concerts",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 43,
    name: "Villa Ada",
    lat: 41.9278,
    lng: 12.5056,
    category: "Parks",
    description: "Large public park popular with joggers and families",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Neighborhoods & Districts
  {
    id: 44,
    name: "Trastevere",
    lat: 41.8891,
    lng: 12.4692,
    category: "Neighborhoods",
    description: "Charming medieval neighborhood with cobblestone streets",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 45,
    name: "Jewish Quarter",
    lat: 41.8917,
    lng: 12.4778,
    category: "Neighborhoods",
    description: "Historic area with synagogue and traditional restaurants",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 46,
    name: "Monti",
    lat: 41.8944,
    lng: 12.4889,
    category: "Neighborhoods",
    description: "Trendy neighborhood with boutiques and wine bars",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 47,
    name: "Testaccio",
    lat: 41.8750,
    lng: 12.4833,
    category: "Neighborhoods",
    description: "Authentic Roman neighborhood famous for food",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 48,
    name: "Aventine Hill",
    lat: 41.8833,
    lng: 12.4806,
    category: "Neighborhoods",
    description: "Peaceful residential hill with beautiful views",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 49,
    name: "Quartiere Coppedè",
    lat: 41.9194,
    lng: 12.5056,
    category: "Neighborhoods",
    description: "Fairy-tale Art Nouveau architectural district",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 50,
    name: "San Lorenzo",
    lat: 41.9000,
    lng: 12.5167,
    category: "Neighborhoods",
    description: "University area with street art and nightlife",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Hidden Gems & Special Sites
  {
    id: 51,
    name: "Keyhole of Rome (Knights of Malta)",
    lat: 41.8833,
    lng: 12.4806,
    category: "Hidden Gems",
    description: "Famous keyhole view perfectly framing St. Peter's dome",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 52,
    name: "Capuchin Crypt",
    lat: 41.9056,
    lng: 12.4889,
    category: "Hidden Gems",
    description: "Macabre chapel decorated with bones of 4,000 monks",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 53,
    name: "Vicus Caprarius",
    lat: 41.9009,
    lng: 12.4833,
    category: "Hidden Gems",
    description: "Underground archaeological site beneath Trevi Fountain",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 54,
    name: "Galleria Sciarra",
    lat: 41.9000,
    lng: 12.4833,
    category: "Hidden Gems",
    description: "Beautiful Art Nouveau covered gallery",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 55,
    name: "San Saba",
    lat: 41.8778,
    lng: 12.4889,
    category: "Hidden Gems",
    description: "Quiet residential area with authentic Roman atmosphere",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 56,
    name: "Pyramid of Cestius",
    lat: 41.8750,
    lng: 12.4806,
    category: "Ancient Sites",
    description: "Ancient Roman pyramid tomb from 18-12 BC",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 57,
    name: "Protestant Cemetery",
    lat: 41.8750,
    lng: 12.4806,
    category: "Hidden Gems",
    description: "Peaceful cemetery where Keats and Shelley are buried",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 58,
    name: "Largo di Torre Argentina",
    lat: 41.8944,
    lng: 12.4778,
    category: "Ancient Sites",
    description: "Archaeological site where Julius Caesar was assassinated",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 59,
    name: "Mausoleum of Augustus",
    lat: 41.9056,
    lng: 12.4778,
    category: "Ancient Sites",
    description: "Circular tomb of Rome's first emperor",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 60,
    name: "Ara Pacis Museum",
    lat: 41.9056,
    lng: 12.4778,
    category: "Museums",
    description: "Modern museum housing Augustus' Altar of Peace",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Additional Notable Sites
  {
    id: 61,
    name: "Altare della Patria",
    lat: 41.8955,
    lng: 12.4823,
    category: "Monuments",
    description: "Victor Emmanuel II Monument with panoramic views",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 62,
    name: "Santa Maria degli Angeli",
    lat: 41.9007,
    lng: 12.4977,
    category: "Religious Sites",
    description: "Michelangelo church built within Diocletian's Baths",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 63,
    name: "Basilica di San Lorenzo fuori le Mura",
    lat: 41.9111,
    lng: 12.5167,
    category: "Religious Sites",
    description: "One of seven pilgrim churches of Rome",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 64,
    name: "Mercati di Traiano",
    lat: 41.8958,
    lng: 12.4861,
    category: "Ancient Sites",
    description: "Ancient Roman shopping complex and museum",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 65,
    name: "Villa di Massenzio",
    lat: 41.8556,
    lng: 12.5167,
    category: "Ancient Sites",
    description: "Well-preserved Roman villa complex on Appian Way",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 66,
    name: "Catacombs of San Callisto",
    lat: 41.8556,
    lng: 12.5167,
    category: "Ancient Sites",
    description: "Underground Christian burial chambers",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 67,
    name: "Appian Way",
    lat: 41.8556,
    lng: 12.5167,
    category: "Ancient Sites",
    description: "Ancient Roman road lined with tombs and ruins",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 68,
    name: "EUR District",
    lat: 41.8333,
    lng: 12.4667,
    category: "Neighborhoods",
    description: "Fascist-era architecture and modern business district",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 69,
    name: "Gianicolo Hill",
    lat: 41.8889,
    lng: 12.4611,
    category: "Parks",
    description: "Panoramic hill with cannon firing daily at noon",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 70,
    name: "Ponte Sant'Angelo",
    lat: 41.9031,
    lng: 12.4663,
    category: "Bridges",
    description: "Beautiful bridge with Bernini angel sculptures",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = romePlaces;
}

// Make available globally for browser use
if (typeof window !== 'undefined') {
  window.romePlaces = romePlaces;
}