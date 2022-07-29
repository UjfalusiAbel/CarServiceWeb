interface ILocation
{
    county:string;
    cities:string[];
}

const counties = [
    'Alba',
    'Arad',
    'Argeș',
    'Bacău',
    'Bihor',
    'Bistrița-Năsăud',
    'Botoșani',
    'Brașov',
    'București-Ilfov',
    'Brăila',
    'Buzău',
    'Călărași',
    'Caraș-Severin',
    'Cluj',
    'Conștanța',
    'Covasna',
    'Dâmbovița',
    'Dolj',
    'Galați',
    'Giurgiu',
    'Gorj',
    'Harghita',
    'Hunedoara',
    'Ialomița',
    'Iași',
    'Maramureș',
    'Mehedinți',
    'Mureș',
    'Neamț',
    'Olt',
    'Prahova',
    'Satu Mare',
    'Sălaj',
    'Sibiu',
    'Suceava',
    'Teleorman',
    'Timiș',
    'Tulcea',
    'Vaslui',
    'Vâlcea',
    'Vrancea',
]

const locations:ILocation[] = [
    {
        county:'Alba',
        cities:[
           'Abrud',
           'Aiud',
           'Alba Iulia',
           'Baia de Aries',
           'Blaj',
           'Campeni',
           'Cugir',
           'Ocna Mures',
           'Sebes',
           'Teius',
           'Zlatna'
        ]
    },

    {
        county:'Arad',
        cities:[
            'Arad',
            'Chișineu-Criș',
            'Curtici',
            'Ineu',
            'Lipova',
            'Nădlac',
            'Pancota',
            'Pecica',
            'Sântana',
            'Sebiș',
        ]
    },

    {
        county:'Argeș',
        cities:[
            'Câmpulung',
            'Costești',
            'Curtea de Argeș',
            'Mioveni',
            'Pitești',
            'Stefanești',
            'Topoloveni'
        ]
    },

    {
        county:'Bacău',
        cities:[
            'Bacău',
            'Buhuși',
            'Comănești',
            'Dărmănești',
            'Moinești',
            'Onești',
            'Slanic-Moldova',
            'Târgu Ocna'
        ]
    },
    
    {
        county:'Bihor',
        cities:[
            'Aleșd',
            'Beiuș',
            'Marghita',
            'Nucet',
            'Oradea',
            'Săcueni',
            'Salonta',
            'Ștei',
            'Valea lui Mihai',
            'Vașcău'
        ]
    },

    {
        county:'Bistrița-Năsăud',
        cities:[
            'Beclean',
            'Bistrița',
            'Năsăud',
            'Sangeorz-Bai'
        ]
    },

    {
        county:'Botoșani',
        cities:[
            'Botoșani',
            'Bucecea',
            'Darabani',
            'Dorohoi',
            'Flămânzi',
            'Săveni'
        ]
    },

    {
        county:'Brașov',
        cities:[
            'Bran',
            'Brașov',
            'Codlea',
            'Făgăraș',
            'Ghimbav',
            'Predeal',
            'Râșnov',
            'Rupea',
            'Săcele',
            'Victoria',
            'Zărnești'
        ]
    },

    {
        county:'București-Ilfov',
        cities:[
            'București',
            'Ilfov'
        ]
    },

    {
        county:'Brăila',
        cities:[
            'Brăila',
            'Faurei',
            'Ianca',
            'Însurăței'
        ]
    },

    {
        county:'Buzău',
        cities:[
            'Buzău',
            'Nehoiu',
            'Pătârlagele',
            'Pogoanele',
            'Râmnicu Sărat'
        ]
    },

    {
        county:'Călărași',
        cities:[
            'Budești',
            'Călărași',
            'Fundulea',
            'Lehliu-Gara',
            'Oltenița'
        ]
    },

    {
        county:'Caraș-Severin',
        cities:[
            'Anina',
            'Băile Herculane',
            'Bocșa',
            'Caransebeș',
            'Moldova Nouă',
            'Oravița',
            'Oțelu Roșu',
            'Reșița'
        ]
    },

    {
        county:'Cluj',
        cities:[
            'Câmpia Turzii',
            'Cluj-Napoca',
            'Dej',
            'Gherla',
            'Huedin',
            'Turda'
        ]
    },

    {
        county:'Conștanța',
        cities:[
            'Băneasa',
            'Cernavodă',
            'Conștanță',
            'Eforie',
            'Harșova',
            'Mangalia',
            'Medgidia',
            'Murfatlar',
            'Năvodari',
            'Negru Vodă',
            'Ovidiu',
            'Techirghiol'
        ]
    },

    {
        county:'Covasna',
        cities:[
            'Baraolt',
            'Covasna',
            'Întorsura Buzăului',
            'Sfântu Gheorghe',
            'Târgu Secuiesc'
        ]
    },

    {
        county:'Dâmbovița',
        cities:[
            'Fieni',
            'Găești',
            'Moreni',
            'Răcari',
            'Târgoviște',
            'Titu'
        ]
    },

    {
        county:'Dolj',
        cities:[
            'Băilești',
            'Bechet',
            'Calafat',
            'Craiova',
            'Dăbuleni',
            'Filiași',
            'Segarcea'
        ]
    },

    {
        county:'Galați',
        cities:[
            'Berești',
            'Galați',
            'Târgu Bujor',
            'Tecuci'
        ]
    },

    {
        county:'Giurgiu',
        cities:[
           'Bolintin-Vale',
           'Giurgiu',
           'Mihăilești'
        ]
    },

    {
        county:'Gorj',
        cities:[
            'Bumbești-Jiu',
            'Motru',
            'Novaci',
            'Rovinari',
            'Târgu Cărbunești',
            'Târgu Jiu',
            'Ticleni',
            'Tismana',
            'Turceni'
        ]
    },

    {
        county:'Harghita',
        cities:[
            'Băile Tușnad',
            'Bălan',
            'Borsec',
            'Cristuru Secuiesc',
            'Miercurea-Ciuc',
            'Odorheiu Secuiesc',
            'Toplița',
            'Vlahița'
        ]
    },

    {
        county:'Hunedoara',
        cities:[
            'Aninoasa',
            'Brad',
            'Calan',
            'Deva',
            'Geoagiu',
            'Hațeg',
            'Hunedoara',
            'Lupeni',
            'Orăștie',
            'Petrilă',
            'Petrosani',
            'Simeria',
            'Uricani',
            'Vulcan'
        ]
    },

    {
        county:'Ialomița',
        cities:[
            'Amara',
            'Cazanești',
            'Fetești',
            'Fierbinți-Târg',
            'Slobozia',
            'Țăndărei',
            'Urziceni'
        ]
    },

    {
        county:'Iași',
        cities:[
            'Harlau',
            'Iași',
            'Pașcani',
            'Podu Iloaiei',
            'Târgu Frumos'
        ]
    },

    {
        county:'Maramureș',
        cities:[
            'Baia Mare',
            'Baia Sprie',
            'Borșa',
            'Cavnic',
            'Dragomirești',
            'Salistea de sus',
            'Seini',
            'Sighetu Marmației',
            'Șomcuța Mare',
            'Târgu Lăpuș',
            'Tăutii-Măgheruș',
            'Ulmeni'
        ]
    },

    {
        county:'Mehedinți',
        cities:[
            'Baia de Arama',
            'Drobeta-Turnu Severin',
            'Orșova',
            'Strehaia',
            'Vanju Mare'
        ]
    },

    {
        county:'Mureș',
        cities:[
            'Iernuț',
            'Luduș',
            'Miercurea Nirajului',
            'Reghin',
            'Sângeorgiu de Pădure',
            'Sărmașu',
            'Sighișoara',
            'Sovata',
            'Târgu-Mureș',
            'Târnăveni',
            'Ungheni'
        ]
    },

    {
        county:'Neamț',
        cities:[
            'Bicaz',
            'Piatra Neamț',
            'Roman',
            'Roznov',
            'Târgu Neamț'
        ]
    },

    {
        county:'Olt',
        cities:[
            'Balș',
            'Caracal',
            'Corabia',
            'Drăgănești-Olt',
            'Piatra-Olt',
            'Potcoava',
            'Scornicești',
            'Slatina'
        ]
    },

    {
        county:'Prahova',
        cities:[
            'Azuga',
            'Baicoi',
            'Boldești-Scaeni',
            'Breaza',
            'Bușteni',
            'Câmpina',
            'Comarnic',
            'Mizil',
            'Ploiești',
            'Plopeni',
            'Sinaia',
            'Slanic',
            'Urlați',
            'Vălenii de Munte'
        ]
    },

    {
        county:'Sălaj',
        cities:[
            'Cehu Silvaniei',
            'Jibou',
            'Simleu Silvaniei',
            'Zalău'
        ]
    },

    {
        county:'Satu Mare',
        cities:[
            'Ardud',
            'Carei',
            'Livada',
            'Negrești-Oas',
            'Satu Mare',
            'Tășmad'
        ]
    },

    {
        county:'Sibiu',
        cities:[
            'Agnița',
            'Avrig',
            'Cisnădie',
            'Copșa Mică',
            'Dumbrăveni',
            'Mediaș',
            'Miercurea Sibiului',
            'Ocna Sibiului',
            'Săliște',
            'Sibiu',
            'Talmaciu'
        ]
    },

    {
        county:'Suceava',
        cities:[
            'Broșteni',
            'Cajvana',
            'Câmpulung Moldovenesc',
            'Dolhasca',
            'Fălticeni',
            'Frasin',
            'Gura Humorului',
            'Liteni',
            'Milișăuți',
            'Rădăuți',
            'Salcea',
            'Siret',
            'Solca',
            'Suceava',
            'Vatra Dornei',
            'Vicovu de Sus'
        ]
    },

    {
        county:'Teleorman',
        cities:[
            'Alexandria',
            'Roișorii de Vede',
            'Turnu Măgurele',
            'Videle',
            'Zimnicea'
        ]
    },

    {
        county:'Timiș',
        cities:[
            'Buziaș',
            'Ciacova',
            'Deta',
            'Făget',
            'Gătaia',
            'Jimbolia',
            'Lugoj',
            'Recaș',
            'Sannicolau Mare',
            'Timișoara'
        ]
    },

    {
        county:'Tulcea',
        cities:[
            'Babadag',
            'Isaccea',
            'Măcin',
            'Sulina',
            'Tulcea'
        ]
    },

    {
        county:'Vâlcea',
        cities:[
            'Băbeni',
            'Băile Govora',
            'Băile Olănești',
            'Bălcești',
            'Berbești',
            'Brezoi',
            'Călimănești',
            'Drăgășani',
            'Horezu',
            'Ocnele Mari',
            'Râmnicu Vâlcea'
        ]
    },


    {
        county:'Vaslui',
        cities:[
            'Bârlad',
            'Huși',
            'Murgeni',
            'Negrești',
            'Vaslui'
        ]
    },

    {
        county:'Vrancea',
        cities:[
            'Adjud',
            'Focșani',
            'Mărăsești',
            'Odobești',
            'Panciu'
        ]
    }

]

export {counties, locations}