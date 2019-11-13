export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-ready microservices",
      author: "Susan J. Fowler",
      price: 33,
      coverImage:
        "https://www.eastonpress.com/secure/Content/ImagesProducts/f451a52b-9cc0-4d63-ba25-39a4bc8ddd3d_500_0.jpg"
    },
    {
      id: 2,
      title: "Realease it!",
      author: "Michael T. Nygard",
      price: 32,
      coverImage:
        "https://www.eastonpress.com/secure/Content/ImagesProducts/f451a52b-9cc0-4d63-ba25-39a4bc8ddd3d_500_0.jpg"
    }
  ];

  getBooks() {
    return new Promise((res,rej) => {
      setTimeout(() => {
        res(this.data);
        // rej(new Error("Status: 500. Server Error"));
      }, 700);
    });
  }
}
