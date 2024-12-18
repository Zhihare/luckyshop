import { Container, Title } from '@/components/shared';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
className?: string;
};

const PrivacyPolicy: React.FC<Props> = ({className}) => {
  return (
<Container>
      <div className={cn('mt-10 mb-14',className)}>
              <Title size="md" className='mb-5' text="Політика конфідеційності" />
              <p className="text-gray-500 text-sm">
                  <span className="text-blue-400">Man_Lucky_Shop </span>
                  забов&apo;sязується зберігати конфіденційність Ваших персональних даних,
                  що надаються під час використання нашого інтернет-магазину.
                  Ми прагнемо забезпечити надійний захист Ваших особистих даних і
                  дотримуємося всіх необхідних заходів для їх захисту.</p> 
              <Title size="sm" className='mt-10 mb-5' text="Конфіденційність даних" /> 
                <ul className="text-gray-500 text-sm space-y-5 ">
                    <li>Ми збираємо лише необхідну інформацію про клієнтів для обробки замовлень та забезпечення високоякісного обслуговування. Ваші персональні дані, такі як ім&apo;я, адреса електронної пошти, адреса доставки, телефон та інші, будуть використовуватися виключно для забезпечення доставки товарів та обробки замовлень.</li>
                    <li>Ми не передаємо, не продаємо та не обмінюємо Ваші персональні дані третім особам, крім випадків, коли це необхідно для виконання зобов&apo;язань, передбачених законом або на вимогу державних органів у відповідності з законодавством.</li>
                </ul>
        <Title size="sm" className='mt-10 mb-5' text="Конфіденційність платежів" />
            <ul className="text-gray-500 text-sm space-y-5 mb-5">
                <li>Шопінг в нашому інтернет-магазині є безпечним та зручним завдяки використанню передових технологій забезпечення платежів. Ми працюємо з провідними платіжними системами, що забезпечують захист Ваших фінансових даних.</li>
                <li>При оплаті кредитною карткою всі дані передаються за захищеним протоколом SSL (Secure Socket Layer). Інформація про Вашу кредитну картку не зберігається на наших серверах і не може бути отримана неправомірними особами.</li>
            </ul>
        <Title size="sm" className='mt-10 mb-5' text="Конфіденційність відвідування сайту" />
            <ul className="text-gray-500 text-sm space-y-5 mb-5">
                    <li>Інтернет-магазин
                        <span className="text-blue-400"> Man_Lucky_Shop </span>
                        використовує технологію &quot;cookies&quot; для збору неідентифікованої інформації про відвідування сайту.
                        Ці дані використовуються для поліпшення роботи сайту та покращення Вашого досвіду користування.</li>
                    <li>Якщо Ви не бажаєте надавати інформацію про використання &quot;cookies&quot;, Ви можете змінити налаштування свого браузера
                        і заблокувати цю функцію. Однак, будь ласка, зверніть увагу,
                        що це може призвести до обмеження функціональності деяких розділів сайту.</li>
            </ul>
        <Title size="sm" className='mt-10 mb-5' text="Конфіденційність комунікації" />
        <ul className="text-gray-500 text-sm space-y-5 mb-5">
          <li>Вся комунікація між Вами та нашим інтернет-магазином є конфіденційною. Ми використовуємо захищений протокол SSL для захисту Вашої інформації від доступу неправомірних осіб. Зміна політики конфіденційності Ми можемо змінювати цю політику конфіденційності з часом, і будь-які зміни будуть опубліковані на цій сторінці. Ми рекомендуємо регулярно перевіряти цю сторінку, щоб бути в курсі останніх змін.</li>
          <li>Якщо у Вас є запитання або пропозиції щодо нашої політики конфіденційності, будь ласка, зв&apo;яжіться з нами за допомогою контактної інформації, наведеної на нашому сайті.</li>
          <li>Дякуємо, що обираєте <span className="text-blue-400"> Man_Lucky_Shop </span>! Ми цінуємо Вашу довіру та гарантуємо, що Ваші персональні дані будуть збережені в таємниці.</li>
        </ul>
       
      </div>
    </Container>
 );
};

export default PrivacyPolicy;