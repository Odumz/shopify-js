const products = [
    {
        name: "Nice brown-black leather bag",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-skylar-kang-6044266_xfkqdv.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "Polka dot white office shirt with sleak brogues",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-terje-sollie-298863_gluqbf.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "Shoes for the family",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-andrew-wilus-5604053_vgo0pb.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "A lady set of red high heels and a black leather bag",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-alexandra-maria-336372_egptgl.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "Cream and brown colored konko shoe",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-skylar-kang-6046184_vxpcfx.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "Supreme caps for supes",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615981713/tutorials/pexels-mukhtar-shuaib-mukhtar-4563870_ib5ogs.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "Yeah, t-shirts in different colors too",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615980914/tutorials/pexels-alexandra-maria-336372_egptgl.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "Beautiful artefact sculpted in 1700s",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615981712/tutorials/pexels-karolina-grabowska-4464484_a71lnb.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "You love to dance, we love ballet too",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615981712/tutorials/pexels-budgeron-bach-5154372_hciasj.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "Nice red and black shopping bags",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615981712/tutorials/pexels-karolina-grabowska-5625112_mtn6p3.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "Love loafers? We got this sleak light blue-black one",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615981712/tutorials/pexels-karolina-grabowska-4464819_fk6lte.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "Don't you just love 'em",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615981712/tutorials/pexels-adrian-dorobantu-2300334_vnd6uo.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
    {
        name: "For those jean outfits",
        imageUrl: "https://res.cloudinary.com/griffintech/image/upload/v1615981712/tutorials/pexels-erik-mclean-4723006_o9genr.jpg",
        description: "lorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connectlorem ipsu delagaines endophormic dulutate killamingi tila dun dis connect",
        price: 499,
        countInStock: 15
    },
];

module.exports = products;