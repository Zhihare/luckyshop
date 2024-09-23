import { Container, Filters, TopBar } from "@/components/shared"


export default function Home() {
  return (
    <>
      <Container className="">  
      </Container>
      <TopBar />
      
      <Container className="mt-5 pb-7">
        <div className="flex gap-14">
          {/*Фільтр*/}
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
