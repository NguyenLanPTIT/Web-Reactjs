
export const getData = async () => {
    const [responseOne, responseTwo, responseThree, responseFour] = await Promise.all([
      fetch('https://phimapi.com/v1/api/danh-sach/phim-le?skip=1&limit=64'),
      fetch('https://phimapi.com/v1/api/danh-sach/phim-bo?skip=1&limit=64'),
      fetch('https://phimapi.com/v1/api/danh-sach/hoat-hinh?skip=1&limit=64'),
      fetch('https://phimapi.com/v1/api/danh-sach/tv-shows?skip=1&limit=64')
    ]);
  
    const phimLeData = await responseOne.json();
    const phimBoData = await responseTwo.json();
    const phimHoatHinhData = await responseThree.json();
    const tvShowData = await responseFour.json();
  
    const featureMovies = phimLeData.data.items.map(movie => ({
      ...movie,
      titlePage: phimLeData.data.titlePage,
    }));
  
    const seriesMovies = phimBoData.data.items.map(movie => ({
      ...movie,
      titlePage: phimBoData.data.titlePage,
    }));  
    const combinedMovies = [...phimLeData.data.items, ...phimBoData.data.items, ...phimHoatHinhData.data.items, ...tvShowData.data.items];
        const shuffledMovies = combinedMovies.sort(() => 0.5 - Math.random());

        const mixMovies = [...featureMovies, ...seriesMovies];
    return {phimLeData,phimBoData, phimHoatHinhData, tvShowData,shuffledMovies, mixMovies};
  };
  