# Отчёт

## 1. Подготовка среды

Для добавления маршрутизации в проект был установлен пакет
```
npm install react-routeк
```

## 2. Настройка основных маршрутов

В файле `App.jsx` настроены следующие статические маршруты:

- **Главная страница** (`/`) — отображает список всех товаров.
- **Страница корзины** (`/cart`) — отображает список выбранных товаров.
- **Страница о нас** (`/about`) — краткая информация о магазине.

**Пример маршрутов в `App.jsx`:**
```jsx
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<PizzaList />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="product/:id" element={<ProductPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>
```

## 3. Динамические маршруты

Для отображения информации о конкретном товаре была создана динамическая страница `/product/:id`, где `id` — это идентификатор товара.

**Пример компонента `ProductPage.jsx`:**
```jsx
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = parseInt(id);
    if (isNaN(productId)) {
      setProduct(null);
      return;
    }

    const foundProduct = data.find((pizza) => pizza.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p>Цена: {product.price}₽</p>
      <p>Категория: {product.category}</p>
      <p>Доступные размеры: {product.sizes.join(", ")} см</p>
    </div>
  );
}
```

## 4. Использование Layout-компонентов

Создан компонент `MainLayout`, который включает шапку (`Header`), слайдер (`Slider`) и подвал (`Footer`). Внутри этого компонента используется `Outlet` для отображения различных страниц.

**Пример компонента `MainLayout.jsx`:**
```jsx
function MainLayout() {
  return (
    <>
      <Header />
      <Slider />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
```

## 5. Страница 404

Добавлена страница `NotFoundPage`, которая отображает сообщение "Страница не найдена", если пользователь переходит по некорректному маршруту.

**Пример компонента `NotFoundPage.jsx`:**
```jsx
import React from "react";

function NotFoundPage() {
  return (
    <div>
      <h2>404 - Страница не найдена</h2>
    </div>
  );
}

export default NotFoundPage;

```

Маршрут для перехвата неверных путей:
```jsx
<Route path="*" element={<NotFoundPage />} />
```

## 6. Валидация параметров маршрута

На странице товара `/product/:id` добавлена валидация параметра `id`. Если параметр не является числом, отображается страница 404.

**Пример валидации в `ProductPage.jsx`:**
```jsx
const productId = parseInt(id);
if (isNaN(productId)) {
  return <NotFoundPage />;
}
```




# Контрольные вопросы

## 1. Что такое динамические маршруты в React Router и как их использовать?

Динамические маршруты позволяют создавать страницы с переменными значениями в URL. Это удобно, например, для отображения страницы товара по его `id`.

**Пример:**
```jsx
<Route path="product/:id" element={<ProductPage />} />
```

Чтобы получить параметр маршрута в компоненте:
```jsx
const { id } = useParams();
```

---

## 2. Как реализовать Layout-компоненты в приложении с маршрутизацией?

Layout-компоненты используются, чтобы не дублировать общую структуру (шапка, подвал и т.д.) на всех страницах. Внутри layout-компонента используется `<Outlet />`, который отображает вложенные маршруты.

**Пример:**
```jsx
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```

**В маршрутах:**
```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>
```

---

## 3. Какие методы проверки параметров маршрута можно использовать?

Параметры маршрута можно проверять вручную, например, если `id` должен быть числом:

**Пример:**
```jsx
const { id } = useParams();

if (isNaN(id)) {
  return <Navigate to="/not-found" />;
}
```

Также можно добавить проверки на существование элемента в базе или списке.

---

## 4. Как настроить отображение страницы 404 при некорректном маршруте?

Для этого нужно добавить маршрут с `path="*"` — он сработает, если никакой другой маршрут не подошёл.

**Пример:**
```jsx
<Route path="*" element={<NotFound />} />
```
Компонент `NotFound` отобразит сообщение о том, что страница не найдена.
