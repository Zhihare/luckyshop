import { Container, Filters } from "@/components/shared";
import { ScrollArea } from "@/components/ui";

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Container className="container mx-auto pt-24 mb-10">
      <div className="flex gap-6">
        {/* Sidebar фильтр */}
        <div className="w-72 h-screen sticky top-0 hidden md:block overflow-y-auto bg-gray-50 p-4 shadow rounded">
          <ScrollArea>
            <Filters className="mt-4"/>
          </ScrollArea>
        </div>

        {/* Основной контент */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Категорія: {params.slug}</h1>
          <p>Тут буде контент для категорії {params.slug}.</p>

          {/* Пример прокрутки */}
          <ul className="flex flex-wrap space-y-4">
            {[...Array(100)].map((_, i) => (
              <li
                key={i}
                className="w-[calc(100%/2)] md:w-[calc(100%/3)] p-4 bg-gray-100 border rounded-lg shadow-sm"
              >
                Елемент {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
