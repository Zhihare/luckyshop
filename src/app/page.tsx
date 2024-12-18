import { Container } from "@/components/shared"
import { CategoryBlock } from "@/components/shared"

export default function Home() {
  return (
    <>
      <Container className="mt-24">
        <h2 className="text-2xl font-bold mb-4">Популярні категорії</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CategoryBlock 
            title="Чоловічий одяг" 
            image="/images/man_clothing.jpg" 
            link="/category/mens"
          />
          <CategoryBlock 
            title="Жіночий одяг" 
            image="/images/women_clothing.jpg" 
            link="/category/womens"
          />
           <CategoryBlock 
            title="Дитячий одяг" 
            image="/images/kids_clothes.webp" 
            link="/category/kids"
          />
          <CategoryBlock 
            title="SALE" 
            image="/images/sale.jpg" 
            link="/category/sale"
          />
          <CategoryBlock 
            title="Зимовий одяг" 
            image="/images/winter.jpg" 
            link="/category/winter"
          />
          <CategoryBlock 
            title="Взуття" 
            image="/images/shoes.webp" 
            link="/category/shoes"
          />
        </div>
      </Container>
      
      <Container className="mt-5 pb-7">
        <div className="flex gap-14">
          {/*Фільтр*/}
          {/* <div className="w-[256px]">
              <Filters/>
          </div> */}

          {/*список товарів*/}
          {/* <div className="flex-1">
            <div className="flex flex-col gap-16">Список товарів</div>
          </div> */}
        </div>
      </Container>
    </>
  );
}