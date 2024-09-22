import { Categories, Container, Filters, SortPopup, Title, TopBar } from "@/components/shared"


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Категорії товарів" size="lg" className="font-extrabold" />
      
      </Container>
      <TopBar />
      
      <Container className="mt-10 pb-14">
        <div className="flex gap-14">
          {/*Фільтрація*/}
          <div className="w-[256px]">
              <Filters/>
          </div>

          {/*список товарів*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товарів</div>
          </div>
        </div>

      </Container>
    </>
    
    
  );
}
