import type { Project } from './types';

const base = '/work/volviendo-al-origen';

export const volviendoAlOrigen: Project = {
  slug: 'volviendo-al-origen',
  order: 1,
  name: { en: 'Volviendo al Origen', es: 'Volviendo al Origen' },
  title: {
    en: 'A working online store prototype for a handmade cosmetics brand, from catalog to order tracking',
    es: 'Un prototipo funcional de tienda en línea para una marca de cosmética artesanal, del catálogo al rastreo del pedido',
  },
  summary: {
    en: 'A storefront with the brand’s real 63-product catalog: filters synced to the URL, a cart with coupons, a two-step checkout, customer accounts and an order tracker with six statuses.',
    es: 'Una tienda con el catálogo real de 63 productos de la marca: filtros sincronizados con la URL, carrito con cupones, checkout en dos pasos, cuentas de cliente y rastreo de pedidos con seis estados.',
  },
  role: {
    en: 'Built the prototype; co-wrote the proposal at NEXA',
    es: 'Desarrollé el prototipo; coescribí la propuesta en NEXA',
  },
  year: '2026',
  status: { en: 'Prototype for a client proposal', es: 'Prototipo para una propuesta' },
  stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Zustand'],
  highlights: {
    en: [
      'Order flow with six statuses, from “order received” to “delivered”, a process I knew from handling orders by hand in my previous job',
      'Shop filters kept in the URL with the History API, so a filtered search can be shared or bookmarked without reloading the page',
      'Cart, account and orders persisted in Zustand and loaded after hydration, so server and browser HTML always match',
    ],
    es: [
      'Flujo de pedidos con seis estados, de “pedido recibido” a “entregado”: un proceso que conocía de gestionar pedidos a mano en mi trabajo anterior',
      'Filtros de la tienda guardados en la URL con la API de historial, para compartir o guardar una búsqueda sin recargar la página',
      'Carrito, cuenta y pedidos persistidos con Zustand y cargados después de hidratar, para que el HTML del servidor y del navegador coincidan',
    ],
  },
  cover: {
    src: `${base}/home.webp`,
    width: 1440,
    height: 900,
    alt: { en: 'Home page of the store prototype on desktop', es: 'Página de inicio del prototipo de tienda en escritorio' },
  },
  coverMobile: {
    src: `${base}/mobile-home.webp`,
    width: 780,
    height: 1688,
    alt: { en: 'Home page of the store prototype on a phone', es: 'Página de inicio del prototipo en un teléfono' },
  },
  links: [
    { kind: 'demo', href: 'https://vao-demo-nexa.netlify.app' },
    { kind: 'code', href: 'https://github.com/renerangelb-bit/volviendo-al-origen-demo' },
  ],
  note: {
    en: 'The project stayed at the proposal stage. The demo works end to end with sample orders and accounts, and no real payments are processed.',
    es: 'El proyecto se quedó en etapa de propuesta. La demo funciona de principio a fin con pedidos y cuentas de ejemplo, y no procesa pagos reales.',
  },
  blocks: [
    {
      type: 'text',
      title: { en: 'Context', es: 'Contexto' },
      body: {
        en: 'Volviendo al Origen makes solid, handmade cosmetics in Aguascalientes, Mexico, and has sold them since 2012. Its website had a recognizable identity, but buying took too many steps, and most customer service happened one message at a time on WhatsApp: shipping costs, payment methods, “where is my order?”.\n\nAt NEXA we wrote a proposal for a new store. I built this prototype so the client could try the whole purchase on a phone before paying for the final build.',
        es: 'Volviendo al Origen elabora cosmética sólida hecha a mano en Aguascalientes y vende desde 2012. Su sitio tenía una identidad reconocible, pero comprar requería demasiados pasos y casi toda la atención pasaba mensaje por mensaje en WhatsApp: costos de envío, formas de pago, “¿dónde está mi pedido?”.\n\nEn NEXA escribimos una propuesta para una tienda nueva. Construí este prototipo para que el cliente pudiera probar la compra completa en su teléfono antes de pagar el desarrollo final.',
      },
    },
    {
      type: 'image',
      image: {
        src: `${base}/shop.webp`,
        width: 1440,
        height: 900,
        alt: { en: 'Shop page with filters in a sidebar', es: 'Página de tienda con filtros laterales' },
      },
      caption: {
        en: 'The shop filters by category, need, price and availability, with a count next to each option.',
        es: 'La tienda filtra por categoría, necesidad, precio y disponibilidad, con un conteo junto a cada opción.',
      },
    },
    {
      type: 'text',
      title: { en: 'What I built', es: 'Qué construí' },
      body: {
        en: '- A shop with filters synced to the URL, and product pages with variants (the photo changes with the selected scent).\n- A slide-out cart with coupons and a free-shipping meter.\n- A two-step checkout with home delivery or store pickup, and card, Mercado Pago, bank transfer (SPEI) or cash at OXXO.\n- Customer accounts with order history and saved addresses.\n- An order tracker with the six statuses from the proposal.\n- A small assistant that answers frequent questions about shipping and payments.',
        es: '- Una tienda con filtros sincronizados con la URL y fichas de producto con variantes (la foto cambia con el aroma elegido).\n- Un carrito lateral con cupones y medidor de envío gratis.\n- Un checkout en dos pasos con envío a domicilio o recolección en tienda, y pago con tarjeta, Mercado Pago, SPEI u OXXO.\n- Cuentas de cliente con historial de pedidos y direcciones guardadas.\n- Un rastreador de pedidos con los seis estados de la propuesta.\n- Un pequeño asistente que responde preguntas frecuentes sobre envíos y pagos.',
      },
    },
    {
      type: 'image',
      image: {
        src: `${base}/checkout.webp`,
        width: 1440,
        height: 900,
        alt: { en: 'Checkout with delivery and payment options', es: 'Checkout con opciones de envío y de pago' },
      },
      caption: {
        en: 'Checkout: delivery method first, then payment. Totals, coupons and free shipping are calculated in one place.',
        es: 'Checkout: primero el método de envío y después el pago. Totales, cupones y envío gratis se calculan en un solo lugar.',
      },
    },
    {
      type: 'phones',
      images: [
        { src: `${base}/mobile-home.webp`, width: 780, height: 1688, alt: { en: 'Home on a phone', es: 'Inicio en un teléfono' } },
        { src: `${base}/mobile-filters.webp`, width: 780, height: 1688, alt: { en: 'Shop filters on a phone', es: 'Filtros de la tienda en un teléfono' } },
        { src: `${base}/mobile-cart.webp`, width: 780, height: 1688, alt: { en: 'Slide-out cart on a phone', es: 'Carrito lateral en un teléfono' } },
      ],
      caption: {
        en: 'Home, filters and cart on a phone, where most of the brand’s customers buy.',
        es: 'Inicio, filtros y carrito en el teléfono, donde compra la mayoría de los clientes de la marca.',
      },
    },
    {
      type: 'text',
      title: { en: 'Technical decisions', es: 'Decisiones técnicas' },
      body: {
        en: '- **Server first.** Catalog and content pages render on the server with the Next.js App Router; only the interactive parts ship JavaScript.\n- **One source for money.** Subtotal, discount, shipping and the free-shipping threshold come from a single `computeTotals` function, used by the cart, the checkout and the order summary.\n- **State that survives a reload.** Cart, account and orders live in Zustand stores persisted to `localStorage`. A `useHydrated` hook built on `useSyncExternalStore` waits for the stored data, so the first render matches the server HTML.\n- **Statuses as data.** The order flow is a typed list, so the tracker, the order confirmation and the demo’s “next status” control all read the same steps:\n\n```\nexport type OrderStatus =\n  | \'recibido\' | \'pagado\' | \'preparando\'\n  | \'empaquetado\' | \'enviado\' | \'entregado\';\n\nexport const STATUS_FLOW: OrderStatus[] = [\n  \'recibido\', \'pagado\', \'preparando\',\n  \'empaquetado\', \'enviado\', \'entregado\',\n];\n```\n\n- **Accessible panels.** Cart and filters trap focus, close with Escape and return focus to the button that opened them.',
        es: '- **Primero el servidor.** El catálogo y las páginas de contenido se generan en el servidor con el App Router de Next.js; solo las partes interactivas envían JavaScript.\n- **Una sola fuente para el dinero.** Subtotal, descuento, envío y el umbral de envío gratis salen de una sola función, `computeTotals`, que usan el carrito, el checkout y el resumen del pedido.\n- **Estado que sobrevive a una recarga.** Carrito, cuenta y pedidos viven en stores de Zustand persistidos en `localStorage`. Un hook `useHydrated` basado en `useSyncExternalStore` espera los datos guardados, así el primer render coincide con el HTML del servidor.\n- **Los estados como datos.** El flujo del pedido es una lista tipada, así el rastreador, la confirmación del pedido y el control de “siguiente estado” de la demo leen los mismos pasos:\n\n```\nexport type OrderStatus =\n  | \'recibido\' | \'pagado\' | \'preparando\'\n  | \'empaquetado\' | \'enviado\' | \'entregado\';\n\nexport const STATUS_FLOW: OrderStatus[] = [\n  \'recibido\', \'pagado\', \'preparando\',\n  \'empaquetado\', \'enviado\', \'entregado\',\n];\n```\n\n- **Paneles accesibles.** El carrito y los filtros atrapan el foco, se cierran con Escape y regresan el foco al botón que los abrió.',
      },
    },
    {
      type: 'image',
      image: {
        src: `${base}/tracking.webp`,
        width: 1440,
        height: 900,
        alt: { en: 'Order tracking page with a status timeline', es: 'Página de rastreo con la línea de tiempo del pedido' },
      },
      caption: {
        en: 'Order tracking: each status has its own message, and pickup orders get different wording from deliveries.',
        es: 'Rastreo del pedido: cada estado tiene su propio mensaje, y los pedidos para recoger usan textos distintos a los de envío.',
      },
    },
    {
      type: 'text',
      title: { en: 'What I’d do next', es: 'Qué haría después' },
      body: {
        en: 'The prototype keeps everything in the browser on purpose. For production, the next steps are an API and a PostgreSQL database for products, orders and customers, a real payment gateway with webhooks that move an order from “received” to “paid”, and end-to-end tests for the purchase flow.',
        es: 'El prototipo guarda todo en el navegador a propósito. Para producción, los siguientes pasos son una API y una base de datos PostgreSQL para productos, pedidos y clientes, una pasarela de pago real con webhooks que pasen el pedido de “recibido” a “pagado”, y pruebas de extremo a extremo del flujo de compra.',
      },
    },
  ],
};
