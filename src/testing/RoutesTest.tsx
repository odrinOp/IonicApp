interface IRoutesMountain{
    id: number,
    name: string,
    photoURL: string,
    date: string,
    description: string,

}


const routes: Array<IRoutesMountain> = [
     {
        id : 1,
        name: "Izvorul Muntelui - Cabana Dochia",
        photoURL: "https://www.watchshop.ro/blog/wp-content/uploads/2019/07/trasee-montane-Romania-Izvorul-Muntelui-Carpatii-Orientali_1361182730.jpg",
        date: "Sept 2020",
        description: "Daca vrei un drum pe Ceahlau, atunci poti alege un traseu usor, pornind de la cabana Izvorul Muntelui si ajungand, prin Curmatura Lutul Rosu, pana la Cabana Dochia. Dupa ce urci prin padure, la jumatatea traseului vei observa Varful Toaca. Un loc unde poti sa faci un mic popas este Piatra cu apa. Dupa ce te-ai odihnit putin la cabana Dochia, daca vrei, poti sa continui drumul pana la Varful Toaca. Poti face aceasta drumetie in orice anotimp. "

    },
    {
        id: 2,
        name: "Poiana Pelegii – Gura Apei ",
        photoURL:"https://www.watchshop.ro/blog/wp-content/uploads/2019/07/trasee-montane-Romania-Lacul-Bucura-Retezat_1337762201.jpg",
        date: "Jan 2020",
        description: "Cu toate ca este un traseu usor, nu este recomandat sa-l parcurgi pe timp de iarna. Traseul din Muntii Retezat este marcat cu cerc albastru. Dupa ce o iei prin padure pana la drumul forestier, treci prin albia Scocului, pana la Scocul Stanuletilor. Ajungi in Lunca Berhinei, unde treci pe langa marcajele drumurilor care duc spre Saua Soarbele si Lacul Bucura. Treci podul si vezi pe partea dreapta cabana Slavei, iar dupa 1,5 km ajungi in Poiana Rotunda. Dupa ce lasi in urma paraul Cascadelor, o iei printr-un defileu stramt, unde admiri cascadele formate de Lapusnicul Mare. La capatul de jos al defileului, ajungi la confluenta dintre Lapusnicul Mare si Mic si, in final, la lacul de acumulare Gura Apei. "
    },

    {
        id:3,
        name:"Satul Ghetar – Pestera Scarisoara",
        photoURL: "https://www.watchshop.ro/blog/wp-content/uploads/2019/07/trasee-montane-Romania-Pestera-Scarisoara-Apuseni_1146767354.jpg",
        date: "Aug 2019",
        description: "Din centrul comunei Garda de Sus poti ajunge in satul Ghetari cu masina sau cu bicicleta, daca esti pregatit  pentru astfel de drumetii. Din satul Ghetar pana la Pestera Scarisoara ajungi in mai putin de jumatate de ora, prin padure. Aici vei putea vedea cel mai mare ghetar subteran din lume."
    }


]

export default routes;