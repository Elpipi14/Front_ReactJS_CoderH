import ProductsItems from "../Content/SampleProducts/ItemsSample";
import plato1 from '../../assets/products/1.png';
import plato2 from '../../assets/products/4.png';
import plato3 from '../../assets/products/12.png';

const MerchandasingProducts = () => {
  return (
    <section className="px-4 pt-8 pb-4 text-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-4">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Viandas accesibles y deliciosas
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          ¡Gran variedad de opciones diarias!
        </h2>
      </div>

      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        {/* Primera Card */}
        <ProductsItems
          title={"Vianda Clasica"}
          description={"Deliciosa milanesa de carne acompañada con un cremoso puré de papas."}
          subtitle={"El clasico y tradicional plato."}
          price={350}
          img={plato1}
        />

        {/* Segunda Card */}
        <ProductsItems
          title={"Vianda Vegetariana"}
          description={"Incluye pollo al horno jugoso acompañado con ensalada fresca de estación.."}
          subtitle={"Ensalda 100% orgánica y saludable."}
          price={450}
          img={plato2}
        />

        {/* Tercera Card */}
        <ProductsItems
          title={"Hamburguesa Premium"}
          description={"Incluye carne Premium con queso, lechuga, tomate, cebolla y papas fritas."}
          subtitle={"Ingredientes caseros gourmet seleccionados."}
          price={420}
          img={plato3}
        />
      </div>
    </section>
  );
};

export default MerchandasingProducts;
