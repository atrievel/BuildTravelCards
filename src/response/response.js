const response = [
    {
        name: 'Decadent Week in Cape Town',
        image: 'cape-town.jpg',
        dateFrom: 'Oct 13th 2019',
        dateTo: 'Oct 18th 2019',
        guests: 4,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Relax in Maui',
        image: 'bali.jpg',
        dateFrom: 'Oct 25th 2019',
        dateTo: 'Oct 27th 2019',
        guests: 2,
        category: 'relaxing',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Weekend in Vegas',
        image: 'vegas.jpg',
        dateFrom: 'May 7th 2020',
        dateTo: 'May 10th 2020',
        guests: 2,
        category: 'weekend break',
        copy:
            'Next level vexillologist taiyaki migas cloud bread post-ironic. Offal selvage gastropub bitters.'
    },
    {
        name: 'Hiking in the Peaks',
        image: 'peaks.jpg',
        dateFrom: 'July 6th 2020',
        dateTo: 'July 10th 2020',
        guests: 2,
        category: 'adventure',
        copy: 'Helvetica umami selvage. Locavore gluten-free tacos, small batch banh mi shoreditch.'
    },
    {
        name: 'Relaxing in Punta Cana',
        image: 'puntacana.jpg',
        dateFrom: 'Aug 7th 2020',
        dateTo: 'Aug 9th 2020',
        guests: 2,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Weekend at an Ice Hotel',
        image: 'icehotel.jpg',
        dateFrom: 'Jan 14th 2020',
        dateTo: 'Jan 16th 2020',
        guests: 4,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Best of Rio de Janeiro',
        image: 'rio.jpg',
        dateFrom: 'Jan 14th 2020',
        dateTo: 'Jan 21th 2020',
        guests: 3,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Midsummer in Helsinki',
        image: 'helsinki.jpg',
        dateFrom: 'June 19th 2020',
        dateTo: 'June 21th 2020',
        guests: 2,
        category: 'weekend break',
        copy:
            'Next level vexillologist taiyaki migas cloud bread post-ironic. Offal selvage gastropub bitters.'
    },
    {
        name: 'Gardens of Damyang',
        image: 'korea.jpg',
        dateFrom: 'May 22nd 2020',
        dateTo: 'May 30th 2020',
        guests: 2,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'India',
        image: 'india.jpg',
        dateFrom: 'Dec 2nd 2019',
        dateTo: 'Feb 9th 2020',
        guests: 1,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'A Weekend in Vancouver',
        image: 'vancouver.jpg',
        dateFrom: 'Oct 5st 2019',
        dateTo: 'Oct 8st 2019',
        guests: 2,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Antwerpen',
        image: 'antwerpen.jpg',
        dateFrom: 'March 2nd 2020',
        dateTo: 'March 4th 2020',
        guests: 2,
        category: 'weekend trip',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: ' Amazing Week in Bali',
        image: 'bali.jpg',
        dateFrom: 'Oct 16th 2019',
        dateTo: 'Oct 22th 2019',
        guests: 4,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'The Atlanta Experience',
        image: 'atlanta.jpg',
        dateFrom: 'Oct 24th 2019',
        dateTo: 'Oct 27th 2019',
        guests: 2,
        category: 'long weekend',
        copy:
            'Enjoy one the greatest gems of the south, Atlanta, GA, for a spooky Halloween weekend.'
    },
    {
        name: 'Sculpture Park',
        image: 'sculpturePark.jpg',
        dateFrom: 'Oct 27th 2019',
        dateTo: 'Spt 03th 2019',
        guests: 1,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Meeting Ancestors at Serra da Capivara National Park',
        image: 'serraDaCapivara.jpg',
        dateFrom: 'Oct 16th 2019',
        dateTo: 'Oct 30th 2019',
        guests: 4,
        category: 'World Heritage Site',
        copy:
            'Meet the largest and oldest concentration of prehistoric sites in the Americas. Sítio do Meio has many prehistoric paintings.'
    },
    {
        name: 'Tour Pittsburgh - the City of Bridges',
        image: 'pittsburgh.jpg',
        dateFrom: 'Oct 11th 2019',
        dateTo: 'Oct 13th 2019',
        guests: 2,
        category: 'Weekend Trip',
        copy:
            `Whether you're visiting Pittsburgh for the first time, or have lived here all your life, these tours -- both guided and unguided -- will help you experience a Pittsburgh you may not expect.`
    },
    {
        name: 'Testing image non-existent',
        image: 'bad-image.gif',
        dateFrom: 'Oct 11th 2019',
        dateTo: 'Oct 20th 2019',
        guests: 4,
        category: 'Bad data',
        copy:
            'This is just a test of bad data.'
    }
]

export default response
