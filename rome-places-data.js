// Comprehensive data for 76 best Rome places with coordinates and descriptions
const romePlaces = [
  // Major Ancient Sites
  {
    id: 1,
    name: {
      en: "Colosseum",
      it: "Colosseo"
    },
    lat: 41.8902,
    lng: 12.4922,
    category: "Ancient Sites",
    description: {
      en: "Iconic Roman amphitheatre where gladiators fought, built in 72-80 AD",
      it: "Iconico anfiteatro romano dove combattevano i gladiatori, costruito nel 72-80 d.C."
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 2,
    name: {
      en: "Roman Forum",
      it: "Foro Romano"
    },
    lat: 41.8925,
    lng: 12.4853,
    category: "Ancient Sites",
    description: {
      en: "Heart of ancient Rome with temples, basilicas and government buildings",
      it: "Cuore dell'antica Roma con templi, basiliche e edifici governativi"
    },
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400"
  },
  {
    id: 3,
    name: {
      en: "Pantheon",
      it: "Pantheon"
    },
    lat: 41.8986,
    lng: 12.4769,
    category: "Ancient Sites",
    description: {
      en: "Best-preserved Roman building with magnificent concrete dome",
      it: "Edificio romano meglio conservato con magnifica cupola in cemento"
    },
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400"
  },
  {
    id: 4,
    name: {
      en: "Palatine Hill",
      it: "Palatino"
    },
    lat: 41.8888,
    lng: 12.4874,
    category: "Ancient Sites",
    description: {
      en: "Legendary birthplace of Rome with imperial palace ruins",
      it: "Leggendario luogo di nascita di Roma con rovine di palazzi imperiali"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 5,
    name: {
      en: "Baths of Caracalla",
      it: "Terme di Caracalla"
    },
    lat: 41.8776,
    lng: 12.4934,
    category: "Ancient Sites",
    description: {
      en: "Massive ancient Roman public baths complex from 212 AD",
      it: "Imponente complesso di terme pubbliche romane del 212 d.C."
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 6,
    name: {
      en: "Circus Maximus",
      it: "Circo Massimo"
    },
    lat: 41.8864,
    lng: 12.4854,
    category: "Ancient Sites",
    description: {
      en: "Ancient Roman chariot racing stadium, largest ever built",
      it: "Antico stadio romano per le corse dei carri, il più grande mai costruito"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 7,
    name: {
      en: "Castel Sant'Angelo",
      it: "Castel Sant'Angelo"
    },
    lat: 41.9031,
    lng: 12.4663,
    category: "Ancient Sites",
    description: {
      en: "Hadrian's Mausoleum, later papal fortress and castle",
      it: "Mausoleo di Adriano, successivamente fortezza papale e castello"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 8,
    name: {
      en: "Capitoline Hill",
      it: "Campidoglio"
    },
    lat: 41.8930,
    lng: 12.4828,
    category: "Ancient Sites",
    description: {
      en: "Smallest of Rome's seven hills, designed by Michelangelo",
      it: "Il più piccolo dei sette colli di Roma, progettato da Michelangelo"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 9,
    name: {
      en: "Theatre of Marcellus",
      it: "Teatro di Marcello"
    },
    lat: 41.8916,
    lng: 12.4781,
    category: "Ancient Sites",
    description: {
      en: "Ancient Roman theatre, model for the Colosseum",
      it: "Antico teatro romano, modello per il Colosseo"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 10,
    name: {
      en: "Domus Aurea",
      it: "Domus Aurea"
    },
    lat: 41.8906,
    lng: 12.4969,
    category: "Ancient Sites",
    description: {
      en: "Nero's Golden House with stunning frescoes",
      it: "Casa Dorata di Nerone con affreschi straordinari"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Vatican & Religious Sites
  {
    id: 11,
    name: {
      en: "St. Peter's Basilica",
      it: "Basilica di San Pietro"
    },
    lat: 41.9022,
    lng: 12.4539,
    category: "Vatican & Religious",
    description: {
      en: "Renaissance church designed by Bramante, Michelangelo, and Bernini",
      it: "Chiesa rinascimentale progettata da Bramante, Michelangelo e Bernini"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 12,
    name: {
      en: "Sistine Chapel",
      it: "Cappella Sistina"
    },
    lat: 41.9029,
    lng: 12.4545,
    category: "Vatican & Religious",
    description: {
      en: "Famous for Michelangelo's ceiling and papal conclaves",
      it: "Famosa per il soffitto di Michelangelo e i conclavi papali"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 13,
    name: {
      en: "Vatican Museums",
      it: "Musei Vaticani"
    },
    lat: 41.9065,
    lng: 12.4536,
    category: "Museums & Galleries",
    description: {
      en: "World's greatest art collection including Raphael Rooms",
      it: "La più grande collezione d'arte del mondo incluse le Stanze di Raffaello"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 14,
    name: {
      en: "Santa Maria Maggiore",
      it: "Santa Maria Maggiore"
    },
    lat: 41.8976,
    lng: 12.4982,
    category: "Vatican & Religious",
    description: {
      en: "Major papal basilica with beautiful mosaics",
      it: "Basilica papale maggiore con bellissimi mosaici"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 15,
    name: {
      en: "San Giovanni in Laterano",
      it: "San Giovanni in Laterano"
    },
    lat: 41.8859,
    lng: 12.5056,
    category: "Vatican & Religious",
    description: {
      en: "Cathedral of Rome, mother of all churches",
      it: "Cattedrale di Roma, madre di tutte le chiese"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Fountains & Squares
  {
    id: 16,
    name: {
      en: "Trevi Fountain",
      it: "Fontana di Trevi"
    },
    lat: 41.9009,
    lng: 12.4833,
    category: "Fountains & Squares",
    description: {
      en: "Baroque fountain where coins are thrown for luck",
      it: "Fontana barocca dove si lanciano monete per la fortuna"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 17,
    name: {
      en: "Spanish Steps",
      it: "Scalinata di Trinità dei Monti"
    },
    lat: 41.9058,
    lng: 12.4823,
    category: "Fountains & Squares",
    description: {
      en: "Famous stairway connecting Piazza di Spagna with Trinità dei Monti",
      it: "Famosa scalinata che collega Piazza di Spagna con Trinità dei Monti"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 18,
    name: {
      en: "Piazza Navona",
      it: "Piazza Navona"
    },
    lat: 41.8992,
    lng: 12.4731,
    category: "Fountains & Squares",
    description: {
      en: "Baroque square with Bernini's Fountain of Four Rivers",
      it: "Piazza barocca con la Fontana dei Quattro Fiumi del Bernini"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 19,
    name: {
      en: "Piazza del Popolo",
      it: "Piazza del Popolo"
    },
    lat: 41.9109,
    lng: 12.4761,
    category: "Fountains & Squares",
    description: {
      en: "Large urban square with Egyptian obelisk and twin churches",
      it: "Grande piazza urbana con obelisco egizio e chiese gemelle"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 20,
    name: {
      en: "Campo de' Fiori",
      it: "Campo de' Fiori"
    },
    lat: 41.8955,
    lng: 12.4724,
    category: "Fountains & Squares",
    description: {
      en: "Lively square with morning market and evening nightlife",
      it: "Piazza vivace con mercato mattutino e vita notturna serale"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Museums & Galleries
  {
    id: 21,
    name: {
      en: "Capitoline Museums",
      it: "Musei Capitolini"
    },
    lat: 41.8931,
    lng: 12.4828,
    category: "Museums & Galleries",
    description: {
      en: "World's oldest public museums with ancient Roman statues",
      it: "I musei pubblici più antichi del mondo con statue romane antiche"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 22,
    name: {
      en: "Palazzo Altemps",
      it: "Palazzo Altemps"
    },
    lat: 41.9006,
    lng: 12.4742,
    category: "Museums & Galleries",
    description: {
      en: "Renaissance palace housing ancient Roman sculptures",
      it: "Palazzo rinascimentale che ospita sculture romane antiche"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 23,
    name: {
      en: "Palazzo Massimo",
      it: "Palazzo Massimo"
    },
    lat: 41.9007,
    lng: 12.4977,
    category: "Museums & Galleries",
    description: {
      en: "National Roman Museum with exceptional frescoes and mosaics",
      it: "Museo Nazionale Romano con affreschi e mosaici eccezionali"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 24,
    name: {
      en: "Palazzo Doria Pamphilj",
      it: "Palazzo Doria Pamphilj"
    },
    lat: 41.8994,
    lng: 12.4794,
    category: "Museums & Galleries",
    description: {
      en: "Private palace with Velázquez portrait of Pope Innocent X",
      it: "Palazzo privato con ritratto di Papa Innocenzo X di Velázquez"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 25,
    name: {
      en: "Borghese Gallery",
      it: "Galleria Borghese"
    },
    lat: 41.9142,
    lng: 12.4922,
    category: "Museums & Galleries",
    description: {
      en: "Art gallery with Bernini sculptures and Caravaggio paintings",
      it: "Galleria d'arte con sculture del Bernini e dipinti del Caravaggio"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Parks & Gardens
  {
    id: 26,
    name: {
      en: "Villa Borghese",
      it: "Villa Borghese"
    },
    lat: 41.9142,
    lng: 12.4922,
    category: "Parks & Gardens",
    description: {
      en: "Large landscaped park with museums, zoo and lake",
      it: "Grande parco paesaggistico con musei, zoo e lago"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 27,
    name: {
      en: "Orange Garden (Giardino degli Aranci)",
      it: "Giardino degli Aranci"
    },
    lat: 41.8825,
    lng: 12.4775,
    category: "Parks & Gardens",
    description: {
      en: "Peaceful garden on Aventine Hill with Rome panorama",
      it: "Giardino tranquillo sull'Aventino con panorama di Roma"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 28,
    name: {
      en: "Rose Garden (Roseto Comunale)",
      it: "Roseto Comunale"
    },
    lat: 41.8819,
    lng: 12.4786,
    category: "Parks & Gardens",
    description: {
      en: "Municipal rose garden with over 1,100 varieties",
      it: "Roseto comunale con oltre 1.100 varietà"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 29,
    name: {
      en: "Villa Celimontana",
      it: "Villa Celimontana"
    },
    lat: 41.8872,
    lng: 12.4944,
    category: "Parks & Gardens",
    description: {
      en: "Historic park on Caelian Hill with jazz concerts",
      it: "Parco storico sul Celio con concerti jazz"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 30,
    name: {
      en: "Villa Ada",
      it: "Villa Ada"
    },
    lat: 41.9267,
    lng: 12.5089,
    category: "Parks & Gardens",
    description: {
      en: "Large public park popular for jogging and picnics",
      it: "Grande parco pubblico popolare per jogging e picnic"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Neighborhoods & Districts
  {
    id: 31,
    name: {
      en: "Trastevere",
      it: "Trastevere"
    },
    lat: 41.8919,
    lng: 12.4692,
    category: "Neighborhoods",
    description: {
      en: "Charming medieval neighborhood with cobblestone streets",
      it: "Affascinante quartiere medievale con strade di ciottoli"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 32,
    name: {
      en: "Testaccio",
      it: "Testaccio"
    },
    lat: 41.8775,
    lng: 12.4775,
    category: "Neighborhoods",
    description: {
      en: "Authentic Roman neighborhood known for food and nightlife",
      it: "Autentico quartiere romano noto per cibo e vita notturna"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 33,
    name: {
      en: "Monti",
      it: "Monti"
    },
    lat: 41.8947,
    lng: 12.4925,
    category: "Neighborhoods",
    description: {
      en: "Trendy neighborhood with vintage shops and wine bars",
      it: "Quartiere alla moda con negozi vintage e wine bar"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 34,
    name: {
      en: "Pigneto",
      it: "Pigneto"
    },
    lat: 41.8889,
    lng: 12.5333,
    category: "Neighborhoods",
    description: {
      en: "Hip neighborhood with street art and alternative culture",
      it: "Quartiere alla moda con street art e cultura alternativa"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 35,
    name: {
      en: "San Lorenzo",
      it: "San Lorenzo"
    },
    lat: 41.9000,
    lng: 12.5167,
    category: "Neighborhoods",
    description: {
      en: "University district with student life and graffiti art",
      it: "Quartiere universitario con vita studentesca e arte dei graffiti"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Hidden Gems
  {
    id: 36,
    name: {
      en: "Quartiere Coppedè",
      it: "Quartiere Coppedè"
    },
    lat: 41.9167,
    lng: 12.5000,
    category: "Hidden Gems",
    description: {
      en: "Fairy-tale neighborhood with Art Nouveau architecture",
      it: "Quartiere fiabesco con architettura Art Nouveau"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 37,
    name: {
      en: "Keyhole of Rome (Knights of Malta)",
      it: "Buco della Serratura (Cavalieri di Malta)"
    },
    lat: 41.8825,
    lng: 12.4775,
    category: "Hidden Gems",
    description: {
      en: "Famous keyhole view of St. Peter's dome perfectly framed",
      it: "Famosa vista dal buco della serratura della cupola di San Pietro perfettamente incorniciata"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 38,
    name: {
      en: "Basilica di San Clemente",
      it: "Basilica di San Clemente"
    },
    lat: 41.8881,
    lng: 12.4972,
    category: "Hidden Gems",
    description: {
      en: "Three-level church with underground Mithraic temple",
      it: "Chiesa a tre livelli con tempio mitraico sotterraneo"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 39,
    name: {
      en: "Capuchin Crypt (Santa Maria della Concezione)",
      it: "Cripta dei Cappuccini (Santa Maria della Concezione)"
    },
    lat: 41.9075,
    lng: 12.4889,
    category: "Hidden Gems",
    description: {
      en: "Decorated with bones of 4,000 Capuchin friars",
      it: "Decorata con le ossa di 4.000 frati cappuccini"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 40,
    name: {
      en: "Galleria Sciarra",
      it: "Galleria Sciarra"
    },
    lat: 41.9000,
    lng: 12.4833,
    category: "Hidden Gems",
    description: {
      en: "Beautiful Art Nouveau covered gallery with frescoes",
      it: "Bellissima galleria coperta Art Nouveau con affreschi"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },

  // Additional Notable Sites
  {
    id: 41,
    name: {
      en: "Piazza Venezia",
      it: "Piazza Venezia"
    },
    lat: 41.8958,
    lng: 12.4825,
    category: "Fountains & Squares",
    description: {
      en: "Central square dominated by the Victor Emmanuel II Monument",
      it: "Piazza centrale dominata dal Monumento a Vittorio Emanuele II"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 42,
    name: {
      en: "Altar of the Fatherland (Vittoriano)",
      it: "Altare della Patria (Vittoriano)"
    },
    lat: 41.8958,
    lng: 12.4825,
    category: "Ancient Sites",
    description: {
      en: "Monument to Victor Emmanuel II with panoramic terrace",
      it: "Monumento a Vittorio Emanuele II con terrazza panoramica"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 43,
    name: {
      en: "Ponte Sant'Angelo",
      it: "Ponte Sant'Angelo"
    },
    lat: 41.9019,
    lng: 12.4667,
    category: "Ancient Sites",
    description: {
      en: "Ancient Roman bridge decorated with Bernini's angels",
      it: "Antico ponte romano decorato con gli angeli del Bernini"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 44,
    name: {
      en: "Isola Tiberina",
      it: "Isola Tiberina"
    },
    lat: 41.8906,
    lng: 12.4775,
    category: "Hidden Gems",
    description: {
      en: "Boat-shaped island in the Tiber River with ancient history",
      it: "Isola a forma di barca nel fiume Tevere con storia antica"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 45,
    name: {
      en: "Santa Maria in Cosmedin",
      it: "Santa Maria in Cosmedin"
    },
    lat: 41.8881,
    lng: 12.4819,
    category: "Vatican & Religious",
    description: {
      en: "Medieval church famous for the Mouth of Truth",
      it: "Chiesa medievale famosa per la Bocca della Verità"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 46,
    name: {
      en: "Mouth of Truth (Bocca della Verità)",
      it: "Bocca della Verità"
    },
    lat: 41.8881,
    lng: 12.4819,
    category: "Hidden Gems",
    description: {
      en: "Ancient marble mask that supposedly bites liars' hands",
      it: "Antica maschera di marmo che presumibilmente morde le mani dei bugiardi"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 47,
    name: {
      en: "Aventine Hill",
      it: "Aventino"
    },
    lat: 41.8825,
    lng: 12.4775,
    category: "Neighborhoods",
    description: {
      en: "Peaceful residential hill with gardens and churches",
      it: "Collina residenziale tranquilla con giardini e chiese"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 48,
    name: {
      en: "Janiculum Hill (Gianicolo)",
      it: "Gianicolo"
    },
    lat: 41.8919,
    lng: 12.4581,
    category: "Parks & Gardens",
    description: {
      en: "Hill with best panoramic views of Rome",
      it: "Collina con le migliori viste panoramiche di Roma"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 49,
    name: {
      en: "Piazza di Spagna",
      it: "Piazza di Spagna"
    },
    lat: 41.9058,
    lng: 12.4823,
    category: "Fountains & Squares",
    description: {
      en: "Elegant square at the bottom of the Spanish Steps",
      it: "Elegante piazza ai piedi della Scalinata di Trinità dei Monti"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 50,
    name: {
      en: "Via del Corso",
      it: "Via del Corso"
    },
    lat: 41.9000,
    lng: 12.4800,
    category: "Neighborhoods",
    description: {
      en: "Main shopping street connecting Piazza del Popolo to Piazza Venezia",
      it: "Principale via dello shopping che collega Piazza del Popolo a Piazza Venezia"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 51,
    name: {
      en: "Largo di Torre Argentina",
      it: "Largo di Torre Argentina"
    },
    lat: 41.8958,
    lng: 12.4764,
    category: "Ancient Sites",
    description: {
      en: "Archaeological site where Julius Caesar was assassinated",
      it: "Sito archeologico dove fu assassinato Giulio Cesare"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 52,
    name: {
      en: "Piazza della Rotonda",
      it: "Piazza della Rotonda"
    },
    lat: 41.8986,
    lng: 12.4769,
    category: "Fountains & Squares",
    description: {
      en: "Square in front of the Pantheon with Egyptian obelisk",
      it: "Piazza di fronte al Pantheon con obelisco egizio"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 53,
    name: {
      en: "Santa Maria sopra Minerva",
      it: "Santa Maria sopra Minerva"
    },
    lat: 41.8983,
    lng: 12.4775,
    category: "Vatican & Religious",
    description: {
      en: "Gothic church near Pantheon with Michelangelo's Christ",
      it: "Chiesa gotica vicino al Pantheon con il Cristo di Michelangelo"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 54,
    name: {
      en: "Palazzo di Giustizia",
      it: "Palazzo di Giustizia"
    },
    lat: 41.9097,
    lng: 12.4639,
    category: "Hidden Gems",
    description: {
      en: "Imposing courthouse known as 'Il Palazzaccio'",
      it: "Imponente palazzo di giustizia noto come 'Il Palazzaccio'"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 55,
    name: {
      en: "Mausoleum of Augustus",
      it: "Mausoleo di Augusto"
    },
    lat: 41.9058,
    lng: 12.4764,
    category: "Ancient Sites",
    description: {
      en: "Tomb of the first Roman Emperor, recently restored",
      it: "Tomba del primo imperatore romano, recentemente restaurata"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 56,
    name: {
      en: "Ara Pacis Museum",
      it: "Museo dell'Ara Pacis"
    },
    lat: 41.9058,
    lng: 12.4764,
    category: "Museums & Galleries",
    description: {
      en: "Museum housing Augustus' Altar of Peace",
      it: "Museo che ospita l'Altare della Pace di Augusto"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 57,
    name: {
      en: "Crypta Balbi",
      it: "Crypta Balbi"
    },
    lat: 41.8958,
    lng: 12.4764,
    category: "Museums & Galleries",
    description: {
      en: "Archaeological museum showing medieval Rome's evolution",
      it: "Museo archeologico che mostra l'evoluzione della Roma medievale"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 58,
    name: {
      en: "Baths of Diocletian",
      it: "Terme di Diocleziano"
    },
    lat: 41.9006,
    lng: 12.4978,
    category: "Ancient Sites",
    description: {
      en: "Largest ancient Roman baths, now part of National Roman Museum",
      it: "Le più grandi terme romane antiche, ora parte del Museo Nazionale Romano"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 59,
    name: {
      en: "Santa Maria degli Angeli",
      it: "Santa Maria degli Angeli"
    },
    lat: 41.9006,
    lng: 12.4978,
    category: "Vatican & Religious",
    description: {
      en: "Church built inside Diocletian's Baths by Michelangelo",
      it: "Chiesa costruita all'interno delle Terme di Diocleziano da Michelangelo"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 60,
    name: {
      en: "Piazza della Repubblica",
      it: "Piazza della Repubblica"
    },
    lat: 41.9006,
    lng: 12.4978,
    category: "Fountains & Squares",
    description: {
      en: "Semicircular square with Fountain of the Naiads",
      it: "Piazza semicircolare con la Fontana delle Naiadi"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 61,
    name: {
      en: "Via Appia Antica",
      it: "Via Appia Antica"
    },
    lat: 41.8583,
    lng: 12.5167,
    category: "Ancient Sites",
    description: {
      en: "Ancient Roman road with catacombs and archaeological sites",
      it: "Antica strada romana con catacombe e siti archeologici"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 62,
    name: {
      en: "Catacombs of San Callisto",
      it: "Catacombe di San Callisto"
    },
    lat: 41.8583,
    lng: 12.5167,
    category: "Vatican & Religious",
    description: {
      en: "Underground Christian burial chambers from 2nd century",
      it: "Camere di sepoltura cristiane sotterranee del II secolo"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 63,
    name: {
      en: "Tomb of Cecilia Metella",
      it: "Tomba di Cecilia Metella"
    },
    lat: 41.8583,
    lng: 12.5167,
    category: "Ancient Sites",
    description: {
      en: "Cylindrical tomb on Via Appia from 1st century BC",
      it: "Tomba cilindrica sulla Via Appia del I secolo a.C."
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 64,
    name: {
      en: "Villa dei Quintili",
      it: "Villa dei Quintili"
    },
    lat: 41.8583,
    lng: 12.5167,
    category: "Ancient Sites",
    description: {
      en: "Ruins of luxurious Roman villa on Via Appia",
      it: "Rovine di lussuosa villa romana sulla Via Appia"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 65,
    name: {
      en: "EUR District",
      it: "Quartiere EUR"
    },
    lat: 41.8350,
    lng: 12.4700,
    category: "Neighborhoods",
    description: {
      en: "Rationalist architecture district built for 1942 World's Fair",
      it: "Quartiere di architettura razionalista costruito per l'Esposizione Universale del 1942"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 66,
    name: {
      en: "Palazzo della Civiltà Italiana",
      it: "Palazzo della Civiltà Italiana"
    },
    lat: 41.8350,
    lng: 12.4700,
    category: "Hidden Gems",
    description: {
      en: "Iconic rationalist building known as 'Square Colosseum'",
      it: "Iconico edificio razionalista noto come 'Colosseo Quadrato'"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 67,
    name: {
      en: "Ostia Antica",
      it: "Ostia Antica"
    },
    lat: 41.7583,
    lng: 12.2917,
    category: "Ancient Sites",
    description: {
      en: "Well-preserved ancient Roman port city ruins",
      it: "Rovine ben conservate dell'antica città portuale romana"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 68,
    name: {
      en: "Villa Adriana (Hadrian's Villa)",
      it: "Villa Adriana"
    },
    lat: 41.9403,
    lng: 12.7739,
    category: "Ancient Sites",
    description: {
      en: "Emperor Hadrian's vast villa complex in Tivoli",
      it: "Vasto complesso di ville dell'imperatore Adriano a Tivoli"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 69,
    name: {
      en: "Villa d'Este",
      it: "Villa d'Este"
    },
    lat: 41.9622,
    lng: 12.7967,
    category: "Parks & Gardens",
    description: {
      en: "Renaissance villa in Tivoli famous for its fountains",
      it: "Villa rinascimentale a Tivoli famosa per le sue fontane"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  {
    id: 70,
    name: {
      en: "Castel Gandolfo",
      it: "Castel Gandolfo"
    },
    lat: 41.7439,
    lng: 12.6489,
    category: "Hidden Gems",
    description: {
      en: "Papal summer residence overlooking Lake Albano",
      it: "Residenza estiva papale che si affaccia sul Lago Albano"
    },
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"
  },
  // Football Venues
  {
    id: 71,
    name: {
      en: "Stadio Olimpico",
      it: "Stadio Olimpico"
    },
    lat: 41.9342,
    lng: 12.4549,
    category: "Football Venues",
    description: {
      en: "Rome's main stadium, home to AS Roma and SS Lazio. Capacity: 70,634. Address: Viale dei Gladiatori 2, 00135 Roma",
      it: "Stadio principale di Roma, casa di AS Roma e SS Lazio. Capienza: 70.634. Indirizzo: Viale dei Gladiatori 2, 00135 Roma"
    },
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400",
    address: "Viale dei Gladiatori 2, 00135 Roma"
  },
  {
    id: 72,
    name: {
      en: "Centro Sportivo Fulvio Bernardini",
      it: "Centro Sportivo Fulvio Bernardini"
    },
    lat: 41.8089,
    lng: 12.6118,
    category: "Football Venues",
    description: {
      en: "AS Roma's training center in Trigoria. Address: Piazzale Dino Viola 1, 00118 Roma",
      it: "Centro di allenamento dell'AS Roma a Trigoria. Indirizzo: Piazzale Dino Viola 1, 00118 Roma"
    },
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
    address: "Piazzale Dino Viola 1, 00118 Roma"
  },
  {
    id: 73,
    name: {
      en: "Stadio Tre Fontane",
      it: "Stadio Tre Fontane"
    },
    lat: 41.8156,
    lng: 12.4742,
    category: "Football Venues",
    description: {
      en: "Home stadium of AS Roma Women and Roma Primavera. Address: Via Acque Salvie 1, 00142 Roma",
      it: "Stadio di casa della Roma Femminile e Roma Primavera. Indirizzo: Via Acque Salvie 1, 00142 Roma"
    },
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
    address: "Via Acque Salvie 1, 00142 Roma"
  },
  {
    id: 74,
    name: {
      en: "SS Lazio Training Center",
      it: "Centro Sportivo SS Lazio"
    },
    lat: 41.8234,
    lng: 12.6089,
    category: "Football Venues",
    description: {
      en: "SS Lazio's training facility in Formello. Address: Via di Santa Cornelia 1000, 00060 Formello",
      it: "Centro di allenamento della SS Lazio a Formello. Indirizzo: Via di Santa Cornelia 1000, 00060 Formello"
    },
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
    address: "Via di Santa Cornelia 1000, 00060 Formello"
  },
  {
    id: 75,
    name: {
      en: "Stadio Flaminio",
      it: "Stadio Flaminio"
    },
    lat: 41.9267,
    lng: 12.4733,
    category: "Football Venues",
    description: {
      en: "Historic stadium designed by Pier Luigi Nervi, former home of AS Roma. Address: Viale Pilsudski, 00196 Roma",
      it: "Stadio storico progettato da Pier Luigi Nervi, ex casa dell'AS Roma. Indirizzo: Viale Pilsudski, 00196 Roma"
    },
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400",
    address: "Viale Pilsudski, 00196 Roma"
  },
  {
    id: 76,
    name: {
      en: "Stadio Testaccio",
      it: "Stadio Testaccio"
    },
    lat: 41.8756,
    lng: 12.4756,
    category: "Football Venues",
    description: {
      en: "Former AS Roma stadium (1929-1940), now a public park. Address: Via Zabaglia, 00153 Roma",
      it: "Ex stadio dell'AS Roma (1929-1940), ora parco pubblico. Indirizzo: Via Zabaglia, 00153 Roma"
    },
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400",
    address: "Via Zabaglia, 00153 Roma"
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