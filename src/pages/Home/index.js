import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <PageDefault >
      <div>

        <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Os reis do FLOW"}
        />

        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]}/>
        <Carousel category={dadosIniciais.categorias[1]}/>
        <Carousel category={dadosIniciais.categorias[2]}/>

      </div>
    </PageDefault>
  );
}

export default Home;
