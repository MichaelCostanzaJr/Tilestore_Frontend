var catalog = [
    {
        _id: "2572",
        price: 20.00,
        stock: 1,
        title: "Pocket Watch",
        image: "IMG_2572.jpeg",
        discount: 5,
        category: "Misc",
      },
      {
        _id: "2573",
        price: 25.00,
        stock: 2,
        title: "Glock Gen 5",
        image: "IMG_2573.jpeg",
        discount: 5,
        category: "Misc",
      },
      {
        _id: "2574",
        price: 30.00,
        stock: 3,
        title: "Live Eye",
        image: "IMG_2574.jpeg",
        discount: 5,
        category: "Misc",
      },
      {
        _id: "2575",
        price: 35.00,
        stock: 4,
        title: "Motorcycle",
        image: "IMG_2575.jpeg",
        discount: 5,
        category: "Misc",
      },
      {
        _id: "2576",
        price: 40.00,
        stock: 5,
        title: "Chevelle",
        image: "IMG_2576.jpeg",
        discount: 5,
        category: "Misc",
      }
    ];

    class Dataservice{
      getCatalog(){
        //some instruction to
        //retrieve data from the actual server
        
        return catalog;
      }
    }

    export default Dataservice;